import { BotMessage, GetHistory, Message, PostChat, PostGame } from "../utility/Api";
import { Scenario } from "../utility/Scenario";
import { DispatchEvent, DispatchEventType } from "../utility/Utility";
import { GameService } from "./GameService";

export class ChatService extends EventTarget {
  #history: Message[] = [];
  #loaded: boolean = false;
  #endMessage: string | null = null;

  // This is very bad code design
  readonly #GameService: GameService;

  constructor() {
    super();
    this.#GameService = GameService.Instance();
  }

  public get history() {
    return this.#history;
  }

  public set history(history: Message[]) {
    // Will this ever become a bottleneck?
    if (this.#history.toString() !== history.toString()) {
      this.#history = history;
      this.checkEndMessage();
      this.dispatch(DispatchEvent.history);
    }
  }

  private checkEndMessage() {
    const lastBotMessage = this.#history.filter((x) => x.type === "Bot").at(-1) as
      | BotMessage
      | undefined;

    if (lastBotMessage && lastBotMessage.endMessage) {
      this.endMessage = lastBotMessage.endMessage;
      this.dispatch(DispatchEvent.endMessage);
    }
  }

  public get loaded() {
    return this.#loaded;
  }

  private set loaded(loaded: boolean) {
    if (this.#loaded === loaded) return;
    this.#loaded = loaded;
    this.dispatch(DispatchEvent.loading);
  }

  public get endMessage(): string | null {
    return this.#endMessage;
  }

  public set endMessage(endMessage: string | null) {
    if (this.#endMessage === endMessage) return;
    this.#endMessage = endMessage;
    this.dispatch(DispatchEvent.endMessage);
  }

  static #instance: ChatService;

  public static Instance(): ChatService {
    if (!this.#instance) {
      this.#instance = new ChatService();
    }
    return this.#instance;
  }

  public async addMessage(gameid: string, name: string, content: string): Promise<void> {
    const message: Message = {
      name: name,
      content: content,
      type: "User",
    };

    // TODO: Will this ever be a bottleneck
    this.history = [...this.history, message];

    try {
      this.history = await PostChat(gameid, name, content);
    } catch {
      this.endMessage = "Failed to add message - Server may be down";
    }
  }

  public async getHistory(gameId: string): Promise<void> {
    try {
      this.history = await GetHistory(gameId);
      this.loaded = true;
    } catch {
      this.endMessage = "Failed to get messages - Server may be down";
    }
  }

  public async initGame(scenario: Scenario): Promise<void> {
    try {
      const response = await PostGame(scenario);
      this.history = response.messages;
      this.#GameService.gameId = response.gameId;
      this.loaded = true;
    } catch {
      this.endMessage = "Failed to initiate game - Server may be down";
    }
  }

  public reset() {
    this.history = [];
    this.endMessage = null;
    this.loaded = false;
    this.#GameService.gameId = null;
  }

  // TODO: Make this method an interface/method to inherit or utility
  /** Custom event dispatcher */
  private dispatch(type: DispatchEventType, value?: unknown) {
    const event = new CustomEvent(type, { detail: value });
    this.dispatchEvent(event);
  }
}

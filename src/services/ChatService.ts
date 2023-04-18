import { BotMessage, GetHistory, Message, PostChat, PostGame } from "../utility/Api";
import { Scenario } from "../utility/Scenario";
import { DispatchEvent, DispatchEventType } from "../utility/Utility";

export class ChatService extends EventTarget {
  #history: Message[] = [];
  #loaded: boolean = false;
  #endMessage: string | null = null;

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

    PostChat(gameid, name, content)
      .then((response) => {
        if (response) {
          this.history = response;
        } else {
          this.endMessage = `404 returned from OpenAI`;
        }
      })
      .catch((e: Error) => {
        this.endMessage = e.message;
      });
  }

  public async getHistory(gameId: string): Promise<void> {
    GetHistory(gameId).then((response) => {
      if (response) {
        this.history = response;
        this.loaded = true;
      }
    });
  }

  public async initGame(scenario: Scenario): Promise<string | null> {
    return PostGame(scenario).then((response) => {
      if (response) {
        this.history = response.messages;
        this.loaded = true;
        return response.gameId;
      } else {
        this.endMessage = `Init room failed`;
        return null;
      }
    });
  }

  public reset() {
    this.history = [];
    this.endMessage = null;
    this.loaded = false;
  }

  /** Custom event dispatcher */
  private dispatch(type: DispatchEventType, value?: unknown) {
    const event = new CustomEvent(type, { detail: value });
    this.dispatchEvent(event);
  }
}

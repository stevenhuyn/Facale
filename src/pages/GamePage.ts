import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { live } from "lit/directives/live.js";
import { map } from "lit/directives/map.js";
import { DispatchEvent } from "../utility/Utility";
import { ScenarioData, Scenario } from "../utility/Scenario";
import { Router } from "@vaadin/router";
import { BotMessage, Message } from "../utility/Api";
import { ifDefined } from "lit/directives/if-defined.js";
import { GameService, ChatService } from "../services";

@customElement("game-page")
export class GamePage extends LitElement {
  readonly #ChatService: ChatService;
  readonly #GameService: GameService;

  @property({ type: String })
  chat: string = "";

  constructor() {
    super();
    this.#ChatService = ChatService.Instance();
    this.#GameService = GameService.Instance();
  }

  changeChat = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.chat = input.value;
  };

  pressChat = (event: KeyboardEvent) => {
    const key = event.key;

    if (key === "Enter" && this.chat.trim()) {
      event.preventDefault();
      this.#GameService.scenario === "ToiletRun" && this.delayHistory();
      if (this.#GameService.gameId && this.#GameService.name) {
        this.#ChatService.addMessage(
          this.#GameService.gameId,
          this.#GameService.name,
          this.chat.trim()
        );
      }

      this.chat = "";
    }
  };

  #scrollToBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    setTimeout(() => {
      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }, 0);
  };

  // Debounced history getter/delayer
  private async getHistory() {
    this.#GameService.scenario === "ToiletRun" && this.delayHistory();
    this.#GameService.gameId && (await this.#ChatService.getHistory(this.#GameService.gameId));
  }

  #timerInterval: number | null = null;
  private delayHistory() {
    if (this.#timerInterval) {
      window.clearInterval(this.#timerInterval);
      this.#timerInterval = null;
    }

    window.setTimeout(() => {
      this.#timerInterval = window.setInterval(async () => {
        if (this.#GameService.gameId) await this.#ChatService.getHistory(this.#GameService.gameId);
      }, 3000);
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.#ChatService.reset();
    this.setupRoom();

    this.#ChatService.addEventListener(DispatchEvent.loading, () => this.requestUpdate());
    this.#ChatService.addEventListener(DispatchEvent.endMessage, () => this.requestUpdate());
    this.#ChatService.addEventListener(DispatchEvent.history, () => {
      this.requestUpdate();
      this.#scrollToBottom();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#timerInterval && window.clearInterval(this.#timerInterval);
  }

  private async setupRoom(): Promise<void> {
    // First check values in query params
    const queryParams = new URLSearchParams(window.location.search);
    // TODO: Represent states in a kind enum union?
    if (queryParams.get("gameId")) {
      this.#GameService.gameId = queryParams.get("gameId");
    }

    if (queryParams.get("scenario")) {
      this.#GameService.scenario = queryParams.get("scenario") as Scenario;
    }

    if (queryParams.get("name")) {
      this.#GameService.name = queryParams.get("name");
    }

    if (!this.#GameService.name || !this.#GameService.scenario) {
      Router.go({
        pathname: "/",
        search: this.#GameService.queryParams,
      });

      return;
    }

    if (!this.#GameService.gameId) {
      // Also sets the gameId in GameService (very bad coupling)
      await this.#ChatService.initGame(this.#GameService.scenario);
    }

    await this.getHistory();
  }

  copyGameLink = () => {
    navigator.clipboard.writeText(
      `${new URL(window.location.href).origin}/name?` + this.#GameService.queryParams
    );
  };

  reactionFace(): string | null {
    const lastBotMessage = this.#ChatService.history
      .filter((m) => m.type === "Bot")
      .at(-1) as BotMessage;

    if (lastBotMessage) {
      return lastBotMessage.expression;
    }

    return null;
  }

  resetGame = () => {
    this.setupRoom();
    this.#ChatService.reset();
  };

  render() {
    if (!this.#GameService.scenario) {
      return null;
    }

    const scenarioData = ScenarioData[this.#GameService.scenario];
    const expression = this.reactionFace();

    return html`
      <div class="row-container">
        <h1>Plakait</h1>
      </div>
      ${this.#GameService.scenario === "ToiletRun"
        ? html`<div class="row-container">
            <sl-button @click=${this.copyGameLink}>Copy Link</sl-button>
          </div>`
        : null}
      <div class="row-container">
        <h2>${scenarioData.introText}</h2>
      </div>
      <div class="container2">
        <message-list>
          ${map(
            this.#ChatService.history.filter((message) => message.content),
            (message: Message) => {
              const isUser = message.type === "User";
              return html`<message-bubble
                ?bot=${!isUser}
                ?user=${isUser}
                name=${ifDefined(isUser ? message.name : scenarioData.oppName)}
                >${message.content}
              </message-bubble>`;
            }
          )}
        </message-list>
      </div>
      <div class="row-container">
        ${this.#ChatService.endMessage ? html`<h3>${this.#ChatService.endMessage}</h3>` : null}
      </div>
      <div class="reaction-container">
        ${expression
          ? html`
              <div class="opp-name">${scenarioData.oppName}</div>
              <div class="opp-expression">${expression}</div>
            `
          : null}
      </div>
      <div class="input-container">
        <sl-input
          size="large"
          @input=${this.changeChat}
          @keypress=${this.pressChat}
          enterkeyhint="send"
          .value=${live(this.chat)}
          ?disabled=${!this.#ChatService.loaded}
          placeholder="Action or dialogue"
        >
          <sl-spinner ?completed=${this.#ChatService.loaded} slot="suffix"></sl-spinner>
        </sl-input>
      </div>
    `;
  }

  static styles = css`
    :host {
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-medium);
      font-weight: var(--sl-font-weight-normal);

      max-width: 800px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 0 1em;
    }

    h1 {
      background: linear-gradient(to right, #ff8a00 0%, #dd4c4f 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .row-container {
      display: flex;
      justify-content: center;
      text-align: center;
    }

    sl-input {
      width: 80%;
    }

    sl-spinner {
      transition-property: all;
      transition-duration: 0.5s;
    }

    sl-spinner[completed] {
      opacity: 0;
    }

    sl-input::part(base) {
      transition-property: all;
      transition-duration: 0.5s;
    }

    message-list {
      flex-grow: 1;
    }

    .reaction-container {
      display: flex;
      align-self: stretch;
      flex-grow: 1;
      flex-direction: column;

      place-content: end;
      align-items: center;

      margin-bottom: 2em;
    }

    .reaction-container .opp-name {
      font-size: var(--sl-font-size-x-large);
    }

    .reaction-container .opp-expression {
      font-size: var(--sl-font-size-3x-large);
    }

    .input-container {
      display: flex;
      align-self: stretch;

      justify-content: center;
      align-items: flex-end;
      align-content: center;
      margin-bottom: 2em;
    }

    .face {
      font-size: 40px;
    }

    message-list {
      max-width: 100%;
    }

    .container2 {
      display: flex;
      justify-content: space-around;
      margin-bottom: 30px;
    }

    .face-container {
      align-self: flex-end;
    }

    .face-container-left {
      margin-right: 30px;
    }

    .face-container-right {
      margin-left: 30px;
    }

    .action-button-container {
      margin-top: 10px;
    }

    .restart {
      margin-top: 30px;
    }
  `;
}

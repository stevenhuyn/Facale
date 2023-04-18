import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ChatService } from "../services/ChatService";
import { live } from "lit/directives/live.js";
import { map } from "lit/directives/map.js";
import { DispatchEvent } from "../utility/Utility";
import { ScenarioData, Scenario } from "../utility/Scenario";
import { Router } from "@vaadin/router";
import { Message } from "../utility/Api";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement("game-page")
export class GamePage extends LitElement {
  readonly #ChatService: ChatService;

  @property({ type: Boolean })
  loaded: boolean = false;

  @property({ type: String })
  gameId: string | null = null;

  @property({ type: String })
  chat: string = "";

  @property({ type: String })
  name: string = "";

  #scenario: Scenario | null = null;

  constructor() {
    super();
    this.#ChatService = ChatService.Instance();
  }

  get queryParams(): string {
    const params = new URLSearchParams({});
    this.name && params.set("name", this.name);
    this.gameId && params.set("gameId", this.gameId);
    this.#scenario && params.set("scenario", this.#scenario);
    return params.toString();
  }

  changeChat = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.chat = input.value;
  };

  pressChat = (event: KeyboardEvent) => {
    const key = event.key;

    if (key === "Enter" && this.chat.trim()) {
      event.preventDefault();
      this.#scenario === "ToiletRun" && this.delayHistory();
      this.gameId && this.#ChatService.addMessage(this.gameId, this.name, this.chat.trim());

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
    this.#scenario === "ToiletRun" && this.delayHistory();
    this.gameId && (await this.#ChatService.getHistory(this.gameId));
  }

  #timerInterval: number | null = null;
  private delayHistory() {
    if (this.#timerInterval) {
      window.clearInterval(this.#timerInterval);
      this.#timerInterval = null;
    }

    window.setTimeout(() => {
      this.#timerInterval = window.setInterval(async () => {
        if (this.gameId) await this.#ChatService.getHistory(this.gameId);
      }, 3000);
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.#ChatService.reset();
    const queryParams = new URLSearchParams(window.location.search);
    this.gameId = queryParams.get("gameId");
    this.#scenario = queryParams.get("scenario") as Scenario;

    const name = queryParams.get("name");
    if (!name || !this.#scenario) {
      Router.go({
        pathname: "/",
        search: this.queryParams,
      });

      return;
    }

    this.name = name;
    this.name = this.name.trim();

    this.#ChatService.addEventListener(DispatchEvent.loading, () => this.requestUpdate());
    this.#ChatService.addEventListener(DispatchEvent.endMessage, () => this.requestUpdate());
    this.#ChatService.addEventListener(DispatchEvent.history, () => {
      this.requestUpdate();
      this.#scrollToBottom();
    });

    this.getRoom();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#timerInterval && window.clearInterval(this.#timerInterval);
  }

  private async getRoom(): Promise<void> {
    if (!this.gameId && this.#scenario) {
      const gameId = await this.#ChatService.initGame(this.#scenario);
      this.loaded = true;
      this.gameId = gameId;
    }

    await this.getHistory();
    this.loaded = true;
  }

  copyGameLink = () => {
    navigator.clipboard.writeText(
      `${new URL(window.location.href).origin}/name?` + this.queryParams
    );
  };

  resetGame = () => {
    this.getRoom();
    this.#ChatService.reset();
  };

  render() {
    if (!this.#scenario) {
      return null;
    }

    const scenarioData = ScenarioData[this.#scenario];

    return html`
      <div class="row-container">
        <h1>Plakait</h1>
      </div>
      ${this.#scenario === "ToiletRun"
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
              const expression = ifDefined(isUser ? null : message.expression);

              return html`<message-bubble
                ?bot=${!isUser}
                ?user=${isUser}
                name=${ifDefined(isUser ? message.name : scenarioData.oppName)}
                expression=${expression}
                >${message.content}
              </message-bubble>`;
            }
          )}
        </message-list>
      </div>
      <div class="row-container">
        ${this.#ChatService.endMessage ? html`<h3>${this.#ChatService.endMessage}</h3>` : null}
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

    .input-container {
      display: flex;
      align-self: stretch;
      flex-grow: 1;

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

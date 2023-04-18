import { Router } from "@vaadin/router";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { router } from "../router";
import { live } from "lit/directives/live.js";

@customElement("name-page")
export class NamePage extends LitElement {
  @property({ type: String })
  name: string = "";

  #scenario: string | null = null;
  #gameId: string | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    const queryParams = new URLSearchParams(window.location.search);
    this.#scenario = queryParams.get("scenario");
    this.#gameId = queryParams.get("gameId");

    if (!this.#scenario) {
      Router.go("/");
    }
  }

  changeChat = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  };

  pressChat = (event: KeyboardEvent) => {
    const key = event.key;

    if (key === "Enter" && this.name.trim()) {
      Router.go({
        pathname: "/game?",
        search: this.queryParams,
      });
    }
  };

  get queryParams(): string {
    const params = new URLSearchParams({});
    this.name && params.set("name", this.name);
    this.#scenario && params.set("scenario", this.#scenario);
    this.#gameId && params.set("gameId", this.#gameId);
    return params.toString();
  }

  get submitName() {
    return router.urlForPath(`/multi?` + this.queryParams);
  }

  render() {
    return html`
      <h2>Name your character</h2>
      <div>
        <sl-input
          @input=${this.changeChat}
          @keypress=${this.pressChat}
          .value=${live(this.name)}
          placeholder="Your character's name"
        ></sl-input>
        <sl-button>
          <nav>
            <a href=${this.submitName}>Submit</a>
          </nav>
        </sl-button>
      </div>
    `;
  }

  static styles = css`
    :host {
      max-width: 900px;
      min-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    sl-input {
      width: 200px;
      display: inline-block;
    }

    a {
      text-decoration: none;
      color: var(--sl-color-neutral-800);
    }
  `;
}

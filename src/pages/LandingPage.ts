import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { router } from "../router";
import { GetRoot } from "../utility/Api";

@customElement("landing-page")
export class LandingPage extends LitElement {
  @property({ type: String })
  backend: "Fetching" | "Up" | "Down" = "Fetching";

  @property({ type: Number })
  progress: number = 1;

  #interval: NodeJS.Timer | null = null;

  #counter: number = 0;
  connectedCallback(): void {
    super.connectedCallback();
    this.checkBackend();
    this.#counter = 0;
    this.#interval = setInterval(() => {
      this.#counter++;
      //prettier-ignore
      this.progress = (-5000 / ((this.#counter + 50))) + 100;
    }, 50);
  }

  async checkBackend(): Promise<void> {
    GetRoot()
      .then(() => {
        this.backend = "Up";
        this.progress = 100;
        this.#interval && clearInterval(this.#interval);
      })
      .catch(() => {
        this.backend = "Down";
        this.#interval && clearInterval(this.#interval);
      });
  }

  render() {
    return html`
      <h1>Plakait</h1>
      <h2>a dialogue game.</h2>
      <div>
        <nav>
          <sl-button
            ?disabled=${this.backend !== "Up"}
            ?up=${this.backend === "Up"}
            ?down=${this.backend === "Down"}
            href=${router.urlForPath("/game/?name=John&scenario=CarSale")}
            variant="success"
          >
            Sleazy Car Salesman
          </sl-button>
        </nav>
        <nav>
          <sl-button
            ?disabled=${this.backend !== "Up"}
            ?up=${this.backend === "Up"}
            ?down=${this.backend === "Down"}
            href=${router.urlForPath("/game/?name=Jane&scenario=BadMil")}
            variant="primary"
          >
            Bad Mother In Law
          </sl-button>
        </nav>
        <nav>
          <sl-button
            ?disabled=${this.backend !== "Up"}
            ?up=${this.backend === "Up"}
            ?down=${this.backend === "Down"}
            href=${router.urlForPath(`/name/?scenario=ToiletRun`)}
            variant="danger"
          >
            Toilet Run (Multiplayer)
          </sl-button>
        </nav>
      </div>
      <div class="progress-container">
        <sl-progress-bar
          ?up=${this.backend === "Up"}
          ?down=${this.backend === "Down"}
          value=${this.progress}
        ></sl-progress-bar>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;

      margin: 0 auto;
      padding: 2rem;
    }

    .progress-container {
      margin-top: 1em;
      width: 90%;
    }

    sl-progress-bar[up] {
      --indicator-color: var(--sl-color-success-500);
    }

    sl-progress-bar[down] {
      --indicator-color: var(--sl-color-danger-500);
    }

    sl-button::part(base) {
      transition-property: all;
      transition-duration: 1s;
    }

    @keyframes fade {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        visibility: hidden;
      }
    }

    nav {
      display: flex;
      place-items: center;
      justify-content: center;
      padding: 0.5em 0;
    }

    h1 {
      background: linear-gradient(to right, #ff8a00 0%, #dd4c4f 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    sl-button {
      width: 100%;
    }
  `;
}

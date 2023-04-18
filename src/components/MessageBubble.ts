import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("message-bubble")
export class MessageBubble extends LitElement {
  @property()
  name: string | null = null;

  @property()
  expression: string | null = null;

  render() {
    return html`
      <span class="name">${this.name}</span>
      ${this.expression && html`<span class="expression">${this.expression}</span>`}
      <div class="bubble">
        <slot></slot>
      </div>
    `;
  }

  static styles = css`
    :host {
      max-width: 90%;
      text-align: left;
      position: relative;
    }

    :host([bot]) {
      align-self: flex-start;
    }

    :host([user]) {
      align-self: flex-end;
    }

    .bubble {
      min-width: 1.3em;
      padding: 8px 12px;
      margin-bottom: 0.5em;
      border-radius: 25px;
      text-align: left;
    }

    :host([bot]) .bubble {
      background: #25282a;
      color: #e8e6e3;
    }

    :host([user]) .bubble {
      background: #006acc;
      color: #e8e6e3;
    }

    .name {
      display: block;
      font-size: 0.75em;
      margin-bottom: 0.25em;
      margin-left: 1.3em;
    }

    :host([bot]) .name {
      text-align: left;
    }

    :host([user]) .name[user] {
      text-align: right;
    }

    .expression {
      right: -10px;
      bottom: -9px;
      position: absolute;
      font-size: var(--sl-font-size-x-large);
    }
  `;
}

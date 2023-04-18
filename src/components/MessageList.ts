import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("message-list")
export class MessageList extends LitElement {
  render() {
    return html`<slot> </slot>`;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
  `;
}

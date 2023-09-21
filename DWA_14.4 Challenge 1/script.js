import { html, css, LitElement } from 'https://unpkg.com/lit-element?module';

class TallyApp extends LitElement {
  static styles = css`

    :host {
      display: block;
      text-align: center;
      font-family: 'Times New Roman', Times, serif;
    }
    button {
      font-size: 2rem;
      padding: 8px 16px;
      margin: 5px;
      color: #5F4B8BFF;
      background-color: #E69A8DFF;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    body {
        background-color :black
    }

  `;

  static properties = {
    count: { type: Number },
    state: { type: String },
  };

  constructor() {
    super();
    this.count = 0;
    this.state = 'Normal';
  }

  add() {
    this.count++;
    this.updateState();
  }

  minus() {
    this.count--;
    this.updateState();
  }

  updateState() {
    if (this.count === -5) {
      this.state = 'Minimum Reached';
    } else if (this.count === 10) {
      this.state = 'Maximum Reached';
    } else {
      this.state = 'Normal';
    }
  }

  render() {
    return html`
      <h1>Tally App</h1>
      <p>Current Count: ${this.count}</p>
      <p>State: ${this.state}</p>
      <button @click="${this.add}" ?disabled=${this.count === 10}>+</button>
      <button @click="${this.minus}" ?disabled="${this.count === -5}">-</button>
    `;
  }
}

customElements.define('tally-app', TallyApp);
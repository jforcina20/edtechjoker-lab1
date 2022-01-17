import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
 
 // This returns the css styling for the element
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  // I know this is to initialize an object, I think it's initializing this file with the starting count
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  // This block increases the counter by 1 when the button in the component is clicked
  __increment() {
    this.counter += 1;
  }

  // This is what returns the HTML for the count and the button on the page
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

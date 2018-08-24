import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `publish-demo`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PublishDemo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .my-style {
          font-style: italic;
          background-color: blueviolet;
          padding: 10px;
          text-align: center;
        }
      </style>
      <h2 class="my-style">Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'dummy text',
      },
    };
  }
}

window.customElements.define('publish-demo', PublishDemo);

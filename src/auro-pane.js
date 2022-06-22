// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import dayjs from 'dayjs/esm';

// Import touch detection lib
import 'focus-visible/dist/focus-visible.min.js';
import styleCss from './style-css.js';
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-pane displays shoulder date information
 *
 * @attr {String} ariaHidden - Sets aria-hidden on the inner button.
 * @attr {String} date - Sets date for parsing and display. Format should be yyyy-mm-dd.
 * @attr {Boolean} disabled - Disables the pane and overrides price to be --.
 * @attr {Boolean} fixed - uses px values instead of rem for fonts.
 * @attr {String} price - Sets price for display. Displayed as is.
 * @attr {Boolean} selected - Sets pane state to selected.
 * @attr {Boolean} sm - Locks the component to `sm` variant.
 * @attr {Number} tabIndex - Sets tabindex on the inner button.
 */

class AuroPane extends LitElement {
  constructor() {
    super();

    this.disabled = false;
    this.selected = false;
  }

  static get properties() {
    return {
      ariaHidden: {
        type: String,
        attribute: "aria-hidden"
      },
      date: { type: String },
      disabled: { type: Boolean, reflect: true },
      price: { type: String },
      selected: { type: Boolean, reflect: true },
      tabIndex: { type: Number },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
      ${styleCssFixed}
    `;
  }

  /**
   * Internal method to parse the date attribute
   * @private
   * @returns {Object} object containing day, date, and month
   */
  parseDateString() {
    const parsedDate = dayjs(this.date);

    if (parsedDate.isValid()) {
      return {
        day: parsedDate.format('ddd'),
        date: parsedDate.format('D'),
        month: parsedDate.format('MMM')
      };
    }

    return {};
  }

  /**
   * Internal method that determines how to display the price attribute
   * @private
   * @returns {TemplateResult} price HTML
   */
  getPrice() {
    if (this.price !== undefined) {
      const priceClasses = {
        'price': true,
        'price--long': this.price.length > 6,
        'child': true
      };

      return html`<span class="${classMap(priceClasses)}">${this.disabled ? unsafeHTML('&ndash;&ndash;') : this.price}</span>`
    }

    return html``;
  }

  /**
   * Programatically focuses the component
   * @return {void}
   */
  focus() {
    this.renderRoot.querySelector('button').focus();
  }

  render() {
    const buttonClasses = {
      'pane': true,
      'isSelected': this.selected,
      'pane--disabled': this.disabled,
      'pane-priced': this.price !== undefined
    };

    const parsedDate = this.parseDateString();

    return html`
      <button 
        class="${classMap(buttonClasses)}" 
        ?disabled="${this.disabled}"
        tabindex="${ifDefined(this.tabIndex ? this.tabIndex : undefined)}" 
        aria-hidden="${ifDefined(this.ariaHidden ? this.ariaHidden : undefined)}">
        <span class="dayOfTheWeek child">${parsedDate.day}</span>
        <span class="date child">${parsedDate.month} ${parsedDate.date}</span>
        ${this.getPrice()}
      </button>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get('auro-pane')) {
  customElements.define('auro-pane', AuroPane);
}

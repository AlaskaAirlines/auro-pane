// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

// Import touch detection lib
import 'focus-visible/dist/focus-visible.min.js';
import styleCss from './style-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-pane displays shoulder date information
 *
 * @attr {String} date - Sets date for parsing and display. Format should be yyyy-mm-dd.
 * @attr {Boolean} disabled - Disables the pane and overrides price to be --.
 * @attr {String} price - Sets price for display. Displayed as is.
 * @attr {Boolean} selected - Sets pane state to selected.
 */

class AuroPane extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.weekdays = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];

    /**
     * @private
     */
    this.months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
  }

  static get properties() {
    return {
      date: { type: String },
      disabled: { type: Boolean },
      price: { type: String },
      selected: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * Internal method to parse the date attribute
   * @private
   * @returns {Object} object containing day, date, and month
   */
  parseDateString() {
    const dateFormatLength = 10;

    if (this.date && this.date.length === dateFormatLength) {
      // Using substring instead of date parsing due to browser inconsistencies
      const year = this.date.substring(0, 4),
        month = this.date.substring(5, 7),
        date = this.date.substring(8),
        parsedDate = new Date(year, month - 1, date);

      return {
        day: this.weekdays[parsedDate.getUTCDay()],
        date: parsedDate.getUTCDate(),
        month: this.months[parsedDate.getUTCMonth()]
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

      return html`<span class="${classMap(priceClasses)}">${this.disabled ? "––" : this.price}</span>`
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
      'pane--selected': this.selected,
      'pane--disabled': this.disabled,
      'pane--priced': this.price !== undefined
    };

    const parsedDate = this.parseDateString();

    return html`
      <button class="${classMap(buttonClasses)}" ?disabled="${this.disabled}">
        <span class="day-of-week child">${parsedDate.day}</span>
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

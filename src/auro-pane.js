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
 * auro-pane provides users a way to ...
 *
 * @attr {String} date - Sets date for display. Format should be yyyy-mm-dd.
 * @attr {Boolean} disabled - Disables the pane and overrides price to be --.
 * @attr {Boolean} selected - Sets pane state to selected.
 */

class AuroPane extends LitElement {
  constructor() {
    super();

    this.weekdays = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ];

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
      selected: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  parseDateString() {
    const dateFormatLength = 10;

    /* eslint-disable no-magic-numbers, sort-vars */
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
    /* eslint-enable no-magic-numbers, sort-vars */

    return {};
  }

  render() {
    const classes = {
      'auro-pane': true,
      'auro-pane--selected': this.selected,
      'auro-pane--disabled': this.disabled
    },
      parsedDate = this.parseDateString();

    return html`
      <button class="${classMap(classes)}" ?disabled="${this.disabled}">
        <div class="day-of-week">${parsedDate.day}</div>
        <div class="date">${parsedDate.month} ${parsedDate.date}</div>
      </button>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get('auro-pane')) {
  customElements.define('auro-pane', AuroPane);
}

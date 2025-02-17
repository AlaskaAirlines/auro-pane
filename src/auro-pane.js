// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable jsdoc/no-undefined-types, prefer-destructuring */

import { LitElement, html } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { format } from 'date-fns';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import '@aurodesignsystem/auro-datetime';

import styleCss from './style-css.js';
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-pane component displays shoulder date information.
 *
 * @attr {String} ariaHidden - Sets aria-hidden on the inner button.
 * @attr {String} date - Sets date for parsing and display. Format should be yyyy-mm-dd.
 * @attr {Boolean} disabled - Disables the pane.
 * @attr {String} price - Sets price for display. Displayed as is.
 * @attr {Boolean} selected - Sets pane state to selected.
 * @attr {Boolean} sm - Locks the component to `sm` variant.
 * @attr {Number} tabIndex - Sets tabindex on the inner button.
 */

export class AuroPane extends LitElement {
  constructor() {
    super();

    this.disabled = false;
    this.selected = false;

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  static get properties() {
    return {
      ariaHidden: {
        type: String,
        attribute: "aria-hidden"
      },
      date: { type: String },
      disabled: { type: Boolean },
      price: { type: String },
      selected: { type: Boolean },
      tabIndex: { type: Number },
    };
  }

  static get styles() {
    return [
      styleCss,
      colorCss,
      tokensCss
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-pane"] - The name of element that you want to register to.
   *
   * @example
   * AuroPane.register("custom-pane") // this will register this element to <custom-pane/>
   *
   */
  static register(name = "auro-pane") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroPane);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-pane');
  }

  /**
   * Internal method to parse the date attribute.
   * @private
   * @returns {String} ISO formatted date string.
   */
  isoDateString() {
    let date = format(new Date(Date.now()), 'yyyy-MM-dd');

    if (this.date) {
      date = this.date;
    }

    const [
      year,
      month,
      day
    ] = date.split('-').map(Number);

    return new Date(Date.UTC(year, month - 1, day)).toISOString();
  }

  /**
   * Internal method that determines how to display the price attribute.
   * @private
   * @returns {TemplateResult} Price HTML.
   */
  getPrice() {
    if (this.price !== undefined) {
      const priceClasses = {
        'price': true,
        'price--long': this.price.length > 6, // eslint-disable-line no-magic-numbers
        'child': true,
        'price--empty': this.price === ''
      };

      if (this.price === '') {
        this.price = '--';
      }

      return html`<span class="${classMap(priceClasses)}" part="price-slot">${this.price}</span>`;
    }

    return html``;
  }

  /**
   * Programmatically focuses the component.
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

    const parsedDate = this.isoDateString();

    return html`
      <button
        class="${classMap(buttonClasses)}"
        ?disabled="${this.disabled}"
        tabindex="${ifDefined(this.tabIndex ? this.tabIndex : undefined)}"
        aria-hidden="${ifDefined(this.ariaHidden ? this.ariaHidden : undefined)}">
        <span class="dayOfTheWeek child">
          <auro-datetime type="weekday" weekday="short" utc="${parsedDate}"></auro-datetime>
        </span>
        <span class="date child">
          <auro-datetime type="month" weekday="short" utc="${parsedDate}"></auro-datetime>
          <auro-datetime type="day" utc="${parsedDate}"></auro-datetime>
        </span>
        ${this.getPrice()}
      </button>
    `;
  }
}

// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable jsdoc/no-undefined-types, prefer-destructuring, object-property-newline */

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { format } from "date-fns";
import { LitElement } from "lit";
import { html } from "lit/static-html.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { AuroDatetime } from "@aurodesignsystem/auro-datetime/class";
import datetimeVersion from "./datetimeVersion.js";

import colorCss from "./styles/color.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-pane component displays shoulder date information.
 *
 * @attr {Boolean} ariaHidden - When true, sets aria-hidden="true" on the inner button. When false, no aria-hidden attribute is set.
 * @attr {String} date - Sets date for parsing and display. Format should be yyyy-mm-dd.
 * @attr {Boolean} disabled - Disables the pane.
 * @attr {String} price - Sets price for display. Displayed as is.
 * @attr {Boolean} selected - Sets pane state to selected.
 * @attr {Boolean} sm - Locks the component to `sm` variant. This attribute is deprecated and will be removed in a future version.
 * @attr {Number} tabIndex - Sets tabindex on the inner button.
 */

export class AuroPane extends LitElement {
  constructor() {
    super();

    this.ariaHidden = false;
    this.disabled = false;
    this.selected = false;

    const versioning = new AuroDependencyVersioning();

    /** @private */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    /** @private */
    this.datetimeTag = versioning.generateTag(
      "auro-datetime",
      datetimeVersion,
      AuroDatetime
    );
  }

  static get properties() {
    return {
      ariaHidden: {
        type: Boolean,
        attribute: "aria-hidden",
      },
      date: { type: String },
      disabled: { type: Boolean, reflect: true },
      price: { type: String },
      selected: { type: Boolean, reflect: true },
      sm: { type: Boolean },
      tabIndex: { type: Number },
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
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
    this.runtimeUtils.handleComponentTagRename(this, "auro-pane");
  }

  /**
   * Internal method to parse the date attribute.
   * @private
   * @returns {String} ISO formatted date string.
   */
  isoDateString() {
    let date = format(new Date(Date.now()), "yyyy-MM-dd");

    if (this.date) {
      date = this.date;
    }

    const parts = date.split("-").map(Number);
    const DATE_PARTS_LENGTH = 3;
    if (
      parts.length !== DATE_PARTS_LENGTH ||
      parts.some((num) => Number.isNaN(num))
    ) {
      throw new Error("Invalid date format: expected 'yyyy-MM-dd'");
    }

    const [year, month, day] = parts;

    return new Date(Date.UTC(year, month - 1, day)).toISOString();
  }

  /**
   * Internal method that determines how to display the price attribute.
   * @private
   * @param {Object} priceClasses - CSS classes to apply to the price element.
   * @returns {TemplateResult} Price HTML.
   */
  getPrice(priceClasses) {
    if (this.price !== undefined) {
      let displayPrice = this.price;

      if (this.price === "") {
        displayPrice = "--";
      }

      return html`<span class="${classMap(priceClasses)}" part="price-slot">${displayPrice}</span>`;
    }

    return html``;
  }

  /**
   * Programmatically focuses the component.
   * @return {void}
   */
  focus() {
    this.renderRoot.querySelector("button").focus();
  }

  render() {
    const PRICE_LENGTH_THRESHOLD = 6;
    const isPriceLong =
      this.price && this.price.length > PRICE_LENGTH_THRESHOLD;
    const isPriceEmpty = this.price === "";

    // Base classes shared by all variants
    const baseButtonClasses = {
      pane: true,
      isSelected: this.selected,
      "pane--disabled": this.disabled,
      "pane-priced": this.price !== undefined,
    };

    const baseDayOfTheWeekClasses = {
      dayOfTheWeek: true,
      child: true,
    };

    const baseDateClasses = {
      date: true,
    };

    const basePriceClasses = {
      price: true,
      child: true,
      "price--empty": isPriceEmpty,
    };

    const variantClasses = {
      button: {
        ...baseButtonClasses,
      },
      dayOfTheWeek: {
        ...baseDayOfTheWeekClasses,
        "body-default": true,
      },
      date: {
        ...baseDateClasses,
        "body-sm": true,
      },
      price: {
        ...basePriceClasses,
        "body-sm": !isPriceLong,
        "body-xs": isPriceLong,
      },
    };

    const parsedDate = this.isoDateString();

    return html`
      <button
        class="${classMap(variantClasses.button)}"
        ?disabled="${this.disabled}"
        tabindex="${ifDefined(this.tabIndex ? this.tabIndex : undefined)}"
        aria-hidden="${ifDefined(this.ariaHidden ? "true" : undefined)}">
        <span class="${classMap(variantClasses.dayOfTheWeek)}">
          <${this.datetimeTag} type="weekday" weekday="short" utc="${parsedDate}"></${this.datetimeTag}>
        </span>
        <span class="${classMap(variantClasses.date)}">
          <${this.datetimeTag} type="month" weekday="short" utc="${parsedDate}"></${this.datetimeTag}>
          <${this.datetimeTag} type="day" utc="${parsedDate}"></${this.datetimeTag}>
        </span>
        ${this.getPrice(variantClasses.price)}
      </button>
    `;
  }
}

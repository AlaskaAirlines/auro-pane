<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-pane

The `auro-pane` element displays shoulder date information.

### Properties & Attributes

| Properties | Attributes  | Modifiers | Type    | Default | Description                                                       |
| ---------- | ----------- | --------- | ------- | ------- | ----------------------------------------------------------------- |
| ariaHidden | aria-hidden |           | boolean |         | Sets aria-hidden="true" on the inner button.                      |
| date       | date        |           | string  |         | Sets date for parsing and display. Format should be `yyyy-mm-dd`. |
| disabled   | disabled    |           | boolean |         | Disables the pane.                                                |
| price      | price       |           | string  |         | Sets price for display. Displayed as is.                          |
| selected   | selected    |           | boolean |         | Sets pane state to selected.                                      |
| sm         | sm          |           | boolean |         | DEPRECATED - Locks the component to `sm` variant.                 |
| tabIndex   | tabIndex    |           | number  |         | Sets tabindex on the inner button.                                |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| focus    | None                                                                 |        | Programmatically focuses the component.           |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicSingle.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basicSingle.html -->
  <auro-pane date="2025-09-20"></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicSingle.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicSingle.html -->

```html
<auro-pane date="2025-09-20"></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Aria-Hidden

Sets `aria-hidden` on the inner button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/aria-hidden.html) -->
  <!-- The below content is automatically added from ../apiExamples/aria-hidden.html -->
  <auro-pane aria-hidden></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/aria-hidden.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/aria-hidden.html -->

```html
<auro-pane aria-hidden></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Date

Sets date for parsing and display. Format should be `yyyy-mm-dd`. If no date is provided, the current date will be rendered.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/date.html) -->
  <!-- The below content is automatically added from ../apiExamples/date.html -->
  <auro-pane date="2025-09-20"></auro-pane>
  <auro-pane date="invalid date"></auro-pane>
  <auro-pane></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/date.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/date.html -->

```html
<auro-pane date="2025-09-20"></auro-pane>
<auro-pane date="invalid date"></auro-pane>
<auro-pane></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Disabled

Disables the pane.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ../apiExamples/disabled.html -->
  <auro-pane date="2025-09-20" price="$500" disabled></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/disabled.html -->

```html
<auro-pane date="2025-09-20" price="$500" disabled></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Price

Sets price for display. Displayed as is.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/price.html) -->
  <!-- The below content is automatically added from ../apiExamples/price.html -->
  <auro-pane price="$500"></auro-pane>
  <auro-pane price=""></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/price.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/price.html -->

```html
<auro-pane price="$500"></auro-pane>
<auro-pane price=""></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Selected

Sets pane state to selected.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/selected.html) -->
  <!-- The below content is automatically added from ../apiExamples/selected.html -->
  <auro-pane selected></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/selected.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/selected.html -->

```html
<auro-pane selected></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Small

<span style="background-color: #ffebee; color: #c62828; padding: 2px 4px; border-radius: 3px; font-size: 0.75em;">DEPRECATED</span> - This attribute is deprecated and will be removed in a future version.

Use the `sm` attribute to render a reduced size version of `auro-pane`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/small.html) -->
  <!-- The below content is automatically added from ../apiExamples/small.html -->
  <auro-pane date="2025-09-20" price="$500" sm></auro-pane>
  <auro-pane date="2025-09-21" price="$501" selected="true" sm></auro-pane>
  <auro-pane date="2025-09-22" price="$480" disabled="true" sm></auro-pane>
  <auro-pane date="2025-09-23" price="$9,999,999" sm></auro-pane> <!-- isPriceLong -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/small.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/small.html -->

```html
<auro-pane date="2025-09-20" price="$500" sm></auro-pane>
<auro-pane date="2025-09-21" price="$501" selected="true" sm></auro-pane>
<auro-pane date="2025-09-22" price="$480" disabled="true" sm></auro-pane>
<auro-pane date="2025-09-23" price="$9,999,999" sm></auro-pane> <!-- isPriceLong -->
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Tab Index

Sets tabindex on the inner button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/tabindex.html) -->
  <!-- The below content is automatically added from ../apiExamples/tabindex.html -->
  <auro-pane tabindex="0"></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/tabindex.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/tabindex.html -->

```html
<auro-pane tabindex="0"></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Method Examples

### Focus

Sets focus to the inner button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/focus.html) -->
  <!-- The below content is automatically added from ../apiExamples/focus.html -->
  <auro-button id="focusExampleBtn">Focus Pane</auro-button>
  <br />
  <auro-pane id="focusExample" date="2025-09-20"></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/focus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/focus.html -->

```html
<auro-button id="focusExampleBtn">Focus Pane</auro-button>
<br />
<auro-pane id="focusExample" date="2025-09-20"></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/focus.js) -->
<!-- The below code snippet is automatically added from ../apiExamples/focus.js -->

```js
export function focusExample() {
  const focusExample = document.querySelector("#focusExample");
  const focusExampleBtn = document.querySelector("#focusExampleBtn");

  focusExampleBtn.addEventListener("click", () => {
    focusExample.focus();
  });
}
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Date and Price

All states using both `date` and `price` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/date-and-price.html) -->
  <!-- The below content is automatically added from ../apiExamples/date-and-price.html -->
  <auro-pane date="2025-09-20" price="$500"></auro-pane>
  <auro-pane date="2025-09-21" price="$501" selected="true"></auro-pane>
  <auro-pane date="2025-09-22" price="$480" disabled="true"></auro-pane>
  <auro-pane date="2025-09-23" price="$999,999"></auro-pane> <!-- isPriceLong -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/date-and-price.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/date-and-price.html -->

```html
<auro-pane date="2025-09-20" price="$500"></auro-pane>
<auro-pane date="2025-09-21" price="$501" selected="true"></auro-pane>
<auro-pane date="2025-09-22" price="$480" disabled="true"></auro-pane>
<auro-pane date="2025-09-23" price="$999,999"></auro-pane> <!-- isPriceLong -->
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-pane-border-color: var(--ds-basic-color-border-subtle, #{v.$ds-basic-color-border-subtle});
  --ds-auro-pane-boxshadow-color: var(--ds-advanced-color-boolean-indicator, #{v.$ds-advanced-color-boolean-indicator});
  --ds-auro-pane-container-color: var(--ds-advanced-color-boolean-isfalse, #{v.$ds-advanced-color-boolean-isfalse});
  --ds-auro-pane-day-of-week-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
  --ds-auro-pane-date-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-pane-price-text-color: var(--ds-advanced-color-shared-text-accent, #{v.$ds-advanced-color-shared-text-accent});
  --ds-auro-pane-price-empty-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
}
```
<!-- AURO-GENERATED-CONTENT:END -->

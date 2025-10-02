<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/api.md) -->
<!-- The below content is automatically added from ../docs/api.md -->

# auro-pane

The auro-pane component displays shoulder date information.

## Properties

| Property     | Attribute     | Type      | Default | Description                                      |
|--------------|---------------|-----------|---------|--------------------------------------------------|
| [ariaHidden](#ariaHidden) | `aria-hidden` | `Boolean` | false   | When true, sets aria-hidden="true" on the inner button. When false, no aria-hidden attribute is set. |
| [date](#date)       | `date`        | `String`  |         | Sets date for parsing and display. Format should be yyyy-mm-dd. |
| [disabled](#disabled)   | `disabled`    | `Boolean` | false   | Disables the pane.                               |
| [price](#price)      | `price`       | `String`  |         | Sets price for display. Displayed as is.         |
| [selected](#selected)   | `selected`    | `Boolean` | false   | Sets pane state to selected.                     |
| [sm](#sm)         | `sm`          | `Boolean` |         | Locks the component to `sm` variant. This attribute is deprecated and will be removed in a future version. |
| [tabIndex](#tabIndex)   | `tabIndex`    | `Number`  |         | Sets tabindex on the inner button.               |

## Methods

| Method  | Type       | Description                             |
|---------|------------|-----------------------------------------|
| [focus](#focus) | `(): void` | Programmatically focuses the component. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basicSingle.html) -->
  <!-- The below content is automatically added from ../apiExamples/basicSingle.html -->
  <auro-pane date="2020-09-20"></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basicSingle.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/basicSingle.html -->

```html
<auro-pane date="2020-09-20"></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

<span style="background-color: #ffebee; color: #c62828; padding: 2px 4px; border-radius: 3px; font-size: 0.75em;">DEPRECATED</span> - This attribute is deprecated and will be removed in a future version.

#### <a name="sm"></a>`sm`

Use the `sm` attribute to render a reduced size version of `auro-pane`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/smallSingle.html) -->
  <!-- The below content is automatically added from ../apiExamples/smallSingle.html -->
  <auro-pane date="2020-09-20" price="$500" sm></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/smallSingle.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/smallSingle.html -->

```html
<auro-pane date="2020-09-20" price="$500" sm></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

#### <a name="ariaHidden"></a>`ariaHidden`

Sets `aria-hidden` on the inner button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/ariaHidden.html) -->
  <!-- The below content is automatically added from ../apiExamples/ariaHidden.html -->
  <auro-pane aria-hidden></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/ariaHidden.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/ariaHidden.html -->

```html
<auro-pane aria-hidden></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="date"></a>`date`

Sets date for parsing and display. Format should be yyyy-mm-dd. If no date is provided, the current date will be rendered.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/date.html) -->
  <!-- The below content is automatically added from ../apiExamples/date.html -->
  <auro-pane date="2020-09-20"></auro-pane>
  <auro-pane date="invalid date"></auro-pane>
  <auro-pane></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/date.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/date.html -->

```html
<auro-pane date="2020-09-20"></auro-pane>
<auro-pane date="invalid date"></auro-pane>
<auro-pane></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="disabled"></a>`disabled`

Disables the pane.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/disabled.html) -->
  <!-- The below content is automatically added from ../apiExamples/disabled.html -->
  <auro-pane date="2020-09-20" price="$500" disabled></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/disabled.html -->

```html
<auro-pane date="2020-09-20" price="$500" disabled></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

#### <a name="price"></a>`price`

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

#### <a name="selected"></a>`selected`

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

#### <a name="tabindex"></a>`tabindex`

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
</auro-accordion>

### Method Examples

#### <a name="focus"></a>`focus`

Focuses the pane button.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/focus.html) -->
  <!-- The below content is automatically added from ../apiExamples/focus.html -->
  <auro-button id="focusExampleBtn">Focus Pane</auro-button>
  <br />
  <auro-pane id="focusExample" date="2020-09-20"></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/focus.html) -->
<!-- The below code snippet is automatically added from ../apiExamples/focus.html -->

```html
<auro-button id="focusExampleBtn">Focus Pane</auro-button>
<br />
<auro-pane id="focusExample" date="2020-09-20"></auro-pane>
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

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ../src/styles/tokens.scss -->

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

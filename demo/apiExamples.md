<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-pane

The auro-pane component displays shoulder date information.

## Attributes

| Attribute | Type      | Description                              |
|-----------|-----------|------------------------------------------|
| [fixed](#fixed)   | `Boolean` | uses px values instead of rem for fonts. |
| [sm](#sm)      | `Boolean` | Locks the component to `sm` variant.     |

## Properties

| Property     | Attribute     | Type      | Default | Description                                      |
|--------------|---------------|-----------|---------|--------------------------------------------------|
| [ariaHidden](#ariaHidden) | `aria-hidden` | `String`  |         | Sets aria-hidden on the inner button.            |
| [date](#date)       | `date`        | `String`  |         | Sets date for parsing and display. Format should be yyyy-mm-dd. |
| [disabled](#disabled)   | `disabled`    | `Boolean` | false   | Disables the pane and overrides price to be --.  |
| [price](#price)      | `price`       | `String`  |         | Sets price for display. Displayed as is.         |
| [selected](#selected)   | `selected`    | `Boolean` | false   | Sets pane state to selected.                     |
| [tabIndex](#tabIndex)   | `tabIndex`    | `Number`  |         | Sets tabindex on the inner button.               |

## Methods

| Method  | Type       | Description                            |
|---------|------------|----------------------------------------|
| [focus](#focus) | `(): void` | Programatically focuses the component. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
      <auro-pane date="2020-09-20"></auro-pane>
      <auro-pane date="2020-09-21" selected></auro-pane>
      <auro-pane date="2020-09-22" disabled></auro-pane>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-pane date="2020-09-20"></auro-pane>
<auro-pane date="2020-09-21" selected></auro-pane>
<auro-pane date="2020-09-22" disabled></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#auro-pane" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-pane date="2020-09-20"></auro-pane>
  <auro-pane date="2020-09-21" selected></auro-pane>
  <auro-pane date="2020-09-22" disabled></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-pane date="2020-09-20"></auro-pane>
<auro-pane date="2020-09-21" selected></auro-pane>
<auro-pane date="2020-09-22" disabled></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#auro-pane" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-pane date="2020-09-20"></auro-pane>
  <auro-pane date="2020-09-21" selected></auro-pane>
  <auro-pane date="2020-09-22" disabled></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-pane date="2020-09-20"></auro-pane>
<auro-pane date="2020-09-21" selected></auro-pane>
<auro-pane date="2020-09-22" disabled></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#auro-pane" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-pane date="2020-09-20"></auro-pane>
  <auro-pane date="2020-09-21" selected></auro-pane>
  <auro-pane date="2020-09-22" disabled></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-pane date="2020-09-20"></auro-pane>
<auro-pane date="2020-09-21" selected></auro-pane>
<auro-pane date="2020-09-22" disabled></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#auro-pane" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-pane date="2020-09-20"></auro-pane>
  <auro-pane date="2020-09-21" selected></auro-pane>
  <auro-pane date="2020-09-22" disabled></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-pane date="2020-09-20"></auro-pane>
<auro-pane date="2020-09-21" selected></auro-pane>
<auro-pane date="2020-09-22" disabled></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#auro-pane" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-pane date="2020-09-20"></auro-pane>
  <auro-pane date="2020-09-21" selected></auro-pane>
  <auro-pane date="2020-09-22" disabled></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<auro-pane date="2020-09-20"></auro-pane>
<auro-pane date="2020-09-21" selected></auro-pane>
<auro-pane date="2020-09-22" disabled></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

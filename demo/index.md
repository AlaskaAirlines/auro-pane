<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Pane

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
`<auro-pane>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) displaying selectable shoulder dates and associated prices.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-pane use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `<auro-pane>` element should be used in situations where users may:

* Select a date to see available flight options
* See multiple dates with price and availability information
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <auro-pane date="2020-09-20"></auro-pane>
  <auro-pane date="2020-09-21" selected></auro-pane>
  <auro-pane date="2020-09-22" disabled></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
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

### Display date and price

Default using both `date` and `price` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/dateAndPrice.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/dateAndPrice.html -->
  <auro-pane date="2020-09-20" price="$500"></auro-pane>
  <auro-pane date="2020-09-21" price="$501" selected="true"></auro-pane>
  <auro-pane date="2020-09-22" price="$480" disabled="true"></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/dateAndPrice.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/dateAndPrice.html -->

```html
<auro-pane date="2020-09-20" price="$500"></auro-pane>
<auro-pane date="2020-09-21" price="$501" selected="true"></auro-pane>
<auro-pane date="2020-09-22" price="$480" disabled="true"></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Small - Use sm size

Use the `sm` attribute to render the small UI that is consistent with mobile and desktop.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/small.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/small.html -->
  <auro-pane date="2020-09-20" price="$500" sm></auro-pane>
  <auro-pane date="2020-09-21" price="$501" selected="true" sm></auro-pane>
  <auro-pane date="2020-09-22" price="$480" disabled="true" sm></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/small.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/small.html -->

```html
<auro-pane date="2020-09-20" price="$500" sm></auro-pane>
<auro-pane date="2020-09-21" price="$501" selected="true" sm></auro-pane>
<auro-pane date="2020-09-22" price="$480" disabled="true" sm></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-pane` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-pane';
registerComponent('custom-pane');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-pane` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/customRegistration.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/customRegistration.html -->
  <custom-pane date="2020-09-20"></custom-pane>
  <custom-pane date="2020-09-21" selected></custom-pane>
  <custom-pane date="2020-09-22" disabled></custom-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/customRegistration.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/customRegistration.html -->

```html
<custom-pane date="2020-09-20"></custom-pane>
<custom-pane date="2020-09-21" selected></custom-pane>
<custom-pane date="2020-09-22" disabled></custom-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

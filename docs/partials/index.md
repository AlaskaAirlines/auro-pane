<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Pane

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## auro-pane use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Display date and price

Default using both `date` and `price` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/dateAndPrice.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/dateAndPrice.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Small - Use sm size

<span style="background-color: #ffebee; color: #c62828; padding: 2px 4px; border-radius: 3px; font-size: 0.75em;">DEPRECATED</span> - This attribute is deprecated and will be removed in a future version.

Use the `sm` attribute to render the small UI that is consistent with mobile and desktop.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/small.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/small.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-pane` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroPane.register(name)` method and pass in a unique name.

```js
import { AuroPane } from '@aurodesignsystem/auro-pane/class';

AuroPane.register('custom-pane');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-pane` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=../apiExamples/customRegistration.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=../apiExamples/customRegistration.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

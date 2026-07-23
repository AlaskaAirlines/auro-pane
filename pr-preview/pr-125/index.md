<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Pane

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
`<auro-pane>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) displaying selectable shoulder dates and associated prices.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-pane>` element should be used in situations where users may:

* Select a date to see available flight options
* See multiple dates with price and availability information
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-pane date="2025-09-20"></auro-pane>
  <auro-pane date="2025-09-21" selected></auro-pane>
  <auro-pane date="2025-09-22" disabled></auro-pane>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-pane date="2025-09-20"></auro-pane>
<auro-pane date="2025-09-21" selected></auro-pane>
<auro-pane date="2025-09-22" disabled></auro-pane>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
 
# auro-pane

The auro-pane component displays shoulder date information.

## Properties

| Property     | Attribute     | Type      | Default | Description                                      |
|--------------|---------------|-----------|---------|--------------------------------------------------|
| `ariaHidden` | `aria-hidden` | `Boolean` | false   | When true, sets aria-hidden="true" on the inner button. When false, no aria-hidden attribute is set. |
| `date`       | `date`        | `String`  |         | Sets date for parsing and display. Format should be yyyy-mm-dd. |
| `disabled`   | `disabled`    | `Boolean` | false   | Disables the pane.                               |
| `price`      | `price`       | `String`  |         | Sets price for display. Displayed as is.         |
| `selected`   | `selected`    | `Boolean` | false   | Sets pane state to selected.                     |
| `sm`         | `sm`          | `Boolean` |         | Locks the component to `sm` variant. This attribute is deprecated and will be removed in a future version. |
| `tabIndex`   | `tabIndex`    | `Number`  |         | Sets tabindex on the inner button.               |

## Methods

| Method  | Type       | Description                             |
|---------|------------|-----------------------------------------|
| `focus` | `(): void` | Programmatically focuses the component. |

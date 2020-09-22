# auro-pane

auro-pane displays shoulder date information

## Properties

| Property     | Attribute     | Type      | Description                                      |
|--------------|---------------|-----------|--------------------------------------------------|
| `ariaHidden` | `aria-hidden` | `String`  | Sets aria-hidden on the inner button.            |
| `date`       | `date`        | `String`  | Sets date for parsing and display. Format should be yyyy-mm-dd. |
| `disabled`   | `disabled`    | `Boolean` | Disables the pane and overrides price to be --.  |
| `price`      | `price`       | `String`  | Sets price for display. Displayed as is.         |
| `selected`   | `selected`    | `Boolean` | Sets pane state to selected.                     |
| `tabIndex`   | `tabIndex`    | `Number`  | Sets tabindex on the inner button.               |

## Methods

| Method  | Type       | Description                           |
|---------|------------|---------------------------------------|
| `focus` | `(): void` | Programatically focuses the component |

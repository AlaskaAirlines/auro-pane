# auro-pane

The auro-pane component displays shoulder date information.

## Attributes

| Attribute | Type      | Description                          |
|-----------|-----------|--------------------------------------|
| `sm`      | `Boolean` | Locks the component to `sm` variant. |

## Properties

| Property     | Attribute     | Type      | Default | Description                                      |
|--------------|---------------|-----------|---------|--------------------------------------------------|
| `ariaHidden` | `aria-hidden` | `String`  |         | Sets aria-hidden on the inner button.            |
| `date`       | `date`        | `String`  |         | Sets date for parsing and display. Format should be yyyy-mm-dd. |
| `disabled`   | `disabled`    | `Boolean` | false   | Disables the pane.                               |
| `price`      | `price`       | `String`  |         | Sets price for display. Displayed as is.         |
| `selected`   | `selected`    | `Boolean` | false   | Sets pane state to selected.                     |
| `tabIndex`   | `tabIndex`    | `Number`  |         | Sets tabindex on the inner button.               |

## Methods

| Method  | Type       | Description                            |
|---------|------------|----------------------------------------|
| `focus` | `(): void` | Programatically focuses the component. |

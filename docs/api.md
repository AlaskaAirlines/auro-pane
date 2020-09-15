# auro-pane

auro-pane displays shoulder date information

## Properties

| Property   | Attribute  | Type      | Description                                      |
|------------|------------|-----------|--------------------------------------------------|
| `date`     | `date`     | `String`  | Sets date for parsing and display. Format should be yyyy-mm-dd. |
| `disabled` | `disabled` | `Boolean` | Disables the pane and overrides price to be --.  |
| `price`    | `price`    | `String`  | Sets price for display. Displayed as is.         |
| `selected` | `selected` | `Boolean` | Sets pane state to selected.                     |

## Methods

| Method  | Type       | Description                           |
|---------|------------|---------------------------------------|
| `focus` | `(): void` | Programatically focuses the component |

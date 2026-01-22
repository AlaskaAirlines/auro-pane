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
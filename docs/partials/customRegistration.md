```js
// Import the class only
import { AuroPane } from '@aurodesignsystem/auro-pane/class';

// Register with a custom name if desired
AuroPane.register('custom-pane');
```

This will create a new custom element `<custom-pane>` that behaves exactly like `<auro-pane>`, allowing both to coexist on the same page without interfering with each other.

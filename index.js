import { AuroPane } from './src/auro-pane';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-pane') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroPane {});
  }
}

export { registerComponent }

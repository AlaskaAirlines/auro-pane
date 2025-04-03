
import { AuroPane } from '../../src/auro-pane.js';

/**
 * The auro-pane component displays shoulder date information.
 */
class AuroPaneWCA extends AuroPane {}

if (!customElements.get("auro-pane")) {
  customElements.define("auro-pane", AuroPaneWCA);
}

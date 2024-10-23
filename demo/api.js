import { focusExample } from './../apiExamples/focus.js';
import { AuroPane } from '../src/auro-pane.js';

AuroPane.register();

/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    focusExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

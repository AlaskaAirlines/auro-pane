// import { example } from '../apiExamples/example';

/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

import { AuroPane } from '../src/auro-pane.js';

AuroPane.register();
AuroPane.register('custom-pane');

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    // example();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

// import { example } from '../apiExamples/example';

/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

import { AuroPane } from "../src/index";

AuroPane.register();
AuroPane.register("custom-pane");

export function initExamples(initCount) {
  // biome-ignore lint: no-unused-variables
  initCount = initCount || 0;

  try {
    initExamples(initCount);
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

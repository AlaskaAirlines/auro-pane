import { focusExample } from "./../apiExamples/focus.js";
import "../src/registered";

export function initExamples(initCount) {
  // biome-ignore lint: no-unused-variables
  initCount = initCount || 0;

  try {
    focusExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

import { focusExample } from './../apiExamples/focus.js';

export function initPaneApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    focusExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initPaneApiExamples(initCount + 1);
      }, 100);
    }
  }
}

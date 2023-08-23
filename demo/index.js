// import { example } from '../apiExamples/example';

export function initPaneIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    // example();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initPaneIndexExamples(initCount + 1);
      }, 100);
    }
  }
}

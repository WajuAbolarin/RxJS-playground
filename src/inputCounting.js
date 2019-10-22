import { fromEvent } from "rxjs";
import { map, startWith } from "rxjs/operators";

import { syncEl } from "./util";

const run = () => {
  const syncInput = syncEl(".input-count");

  const inputs$ = fromEvent(document.querySelector("textarea"), "keyup");
  const noOfInputs$ = inputs$.pipe(
    map(e => e.target.value.length),
    startWith(document.querySelector("textarea").value.length)
  );
  return noOfInputs$.subscribe(syncInput);
};

export default run;

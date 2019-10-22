import { fromEvent } from "rxjs";
import { scan, mapTo } from "rxjs/operators";

import { syncEl } from "./util";

const run = () => {
  const clicks$ = fromEvent(document.querySelector("button"), "click");
  const noOfClicks$ = clicks$.pipe(
    mapTo(1),
    scan((s, i) => s + i, 0)
  );

  const syncCount = syncEl(".count");
  noOfClicks$.subscribe(syncCount);
};

export default run;

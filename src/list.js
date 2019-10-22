// import { fromPromise } from "rxjs";
import { scan, mapTo } from "rxjs/operators";

import { fetchTodos } from "./todos";
import { syncEl } from "./util";

const run = () => {
  const todos$ = fromPromise(fetchTodos);

  todos$.subscribe(console.log);
};

export default run;

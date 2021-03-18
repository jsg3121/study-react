import { Action } from "redux";
import { Epic } from "redux-observable";
import { delay, filter, map } from "rxjs/operators";
import { increment, incrementAsync } from "../Action/counter.action";
import * as countActions from "../Action/counter.action";

type Actions = typeof countActions;

const countEpic: Epic<Action<Actions>, Action<any>, void, any> = (actions$) => {
  return actions$.pipe(
    filter(increment.match),
    delay(1000),
    map(() => incrementAsync())
  );
};

export default countEpic;

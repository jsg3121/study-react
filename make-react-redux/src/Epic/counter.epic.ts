import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Action } from "@reduxjs/toolkit";
import { increment } from "../Action/counter.action";

const countEpic = (actions$: Observable<Action>) => {
  actions$.pipe(
    filter(increment.match),
    map((action) => {
      console.log(action);
      console.log("ddddddd");
    })
  );
};

export default countEpic;

import React from 'react';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { decrement, increment } from '../Action/counter.action';

const Counter = () => {

  const count = useAppSelector(state => {
    return state.counter;
  });

  console.log(count);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Action/counter.action';
import { RootState } from '../Store';

const Counter = () => {
  const count = useSelector<RootState>((state) => {
    console.log(state);
    return 111;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
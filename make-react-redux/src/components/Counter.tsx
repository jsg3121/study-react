import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Reducer/counterReducer';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from '../Action/counter.action';
// import { RootState } from '../Store';

interface CounterState {

}

const Counter = () => {
  // const count: any = useSelector<RootState>(state => {
  //   return state;
  // });

  // console.log(count);




  const count = useSelector(state => {
    return state.counter.count;
  });

  console.log(count);

  const dispatch = useDispatch();

  // const incrementNumber = () => {
  //   dispatch(increment);
  // };
  // const decrementNumber = () => {
  //   dispatch(decrement);
  // };


  return (
    <div>
      <h1>dd</h1>
      <button onClick={() => dispatch(increment)}>Increment</button>
      <button onClick={() => dispatch(decrement)}>Decrement</button>
    </div>
  );
};

export default Counter;
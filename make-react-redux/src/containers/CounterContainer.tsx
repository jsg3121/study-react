import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/module/counter";

const mapStateToProps = ((state: { counter: { number: number; }; }) => ({
  counterNum: state.counter.number
}));

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      increase,
      decrease
    },
    dispatch
  );

const CounterContainer = ({ counterNum, increase, decrease }: any) => {
  return (
    <Counter number={counterNum} onIncrease={increase} onDecrease={decrease} />
  );
};


// class CounterContainer extends Component {
//   render() {
//     return (
//       <div>
//         <Counter />
//       </div>
//     );
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
import Counter from "../components/Counter";
import * as actions from "../actions";
import { connect } from "react-redux";

type stateType = {
    color: string;
    number: string;
};

const mapStateToProps = (state: stateType) => ({
    color: state.color,
    number: state.number
});

const mapDispatchToProps = (dispatch: any) => ({
    onIncresment: () => dispatch(actions.increment),
    onDecrement: () => dispatch(actions.decrement),
    onSetColor: () => {
        const color = "black";
        dispatch(actions.setColor(color));
    }
});

const CounterCountainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterCountainer;
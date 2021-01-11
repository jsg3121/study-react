import React from 'react';
import PropTypes from 'prop-types';
import "../style/Counter.css";

type CounterProp = {
    number: number;
    color: string;
    onIncresment: () => number;
    onDecresment: () => number;
    onSetColor: () => string;
};

const Counter = ({ number, color, onIncresment, onDecresment, onSetColor }: CounterProp) => {
    return (
        <div className="Counter" onClick={onIncresment}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecresment();
                }
            }
            onDoubleClick={onSetColor}
            style={{ backgroundColor: color }}>
            {number}
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncresment: PropTypes.func,
    onDecresment: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncresment: () => console.warn('onIncrement not defined'),
    onDecresment: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;
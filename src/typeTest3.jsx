import * as React from 'react';

interface Props {
  children: any;
}

interface State {
    name1counter: number;
}
export default class typeTest3 extends React.Component<Props, State> {
    state = {
        countercounter: 0
    };

    handleClick = () : void => {
        const {counter} = this.state;

        this.setState({
            counter: counter + 1
        });
    };

    render() {
        const { children } = this.props;
        const { counter } = this.state;
        return (
            <>
            <button onClick={this.handleClick}>
                {children}
            </button>
            </>
        )
    }
}
import * as React from 'react';

type Props {
    name1 : string;
    name2 : string;
}

export default class typeTest extends React.Component<Props> {
    render() {
        const { name1, name2 } = this.props;
        return (
            <div>
                {name1} , {name2}
            </div>
        );
    }
}

export default typeTest;
import * as React from 'react';

interface Props {
    name1 : string;
    name2 : string;
}

const typeTest2: React.FunctionComponent<Props> = ({name1, name2}) => (
    <div>
        {name1} , {name2}
    </div>
)

export default typeTest2;
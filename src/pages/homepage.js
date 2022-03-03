import React from 'react';
// components can be imported using the following syntax.
import TestButton from '../components/TestButton';

/*
Class components can also be used to create React components.
*/
class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>React Test App</h1>
                <TestButton />
            </div>
        );
    }
}

export default Homepage;
import React from 'react';

/*
Functional Components are the most common way in which React Components are created.
*/
function TestButton() {
    const [selected, setSelected] = React.useState(false);

    return (
        <button onClick={() => setSelected(!selected)}>
            {selected ? "Yes" : "No"}
        </button>
    );
}

export default TestButton;
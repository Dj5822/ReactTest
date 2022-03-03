import React from 'react';

function TestButton() {
    const [selected, setSelected] = React.useState(false);

    return (
        <button onClick={() => setSelected(!selected)}>
            {selected ? "Yes" : "No"}
        </button>
    );
}

export default TestButton;
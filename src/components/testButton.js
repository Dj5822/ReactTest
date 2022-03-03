import React from 'react';

/*
Functional Components are the most common way in which React Components are created.
*/
function TestButton() {
    const [selected, setSelected] = React.useState(false);

    return (
        <div>
            <button onClick={() => setSelected(!selected)}>
                {selected ?  "hide" : "show"}
            </button>
            {selected ? <p>What is the meaning of life?</p> : null}
        </div>
        
    );
}

export default TestButton;
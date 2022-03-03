import React from 'react';
import ReactDOM from 'react-dom';

function TestButton() {
    const [selected, setSelected] = React.useState(false);

    return React.createElement('button', { onClick: () => setSelected(!selected)}, selected ? 'Yes' : 'No');
}

const container = document.getElementById("main-container");
ReactDOM.render(<TestButton/>, container);
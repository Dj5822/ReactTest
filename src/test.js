function TestButton() {
    const [selected, setSelected] = React.useState(false);

    return React.createElement('button', { onClick: () => setSelected(!selected)}, selected ? 'Yes' : 'No')
}

const container = document.querySelector("#main-container");
ReactDOM.render(<TestButton/>, container)
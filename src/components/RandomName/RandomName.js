import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function RandomName(props) {
    const [name, newName] = useState(0);

    const { names } = props;
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={() => newName(names[Math.floor(Math.random()*names.length)])}>
                New Name
            </button>
        </div>
    );
}

ReactDOM.render(
    <RandomName names={['Paul', 'David', 'Kevin']} />,
    document.getElementById('root')
);

export default RandomName
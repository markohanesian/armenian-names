import React, { useState } from 'react';

function RandomName() {
    const [name, newName] = useState(0);

    const names=['Paul', 'David', 'Kevin'];

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={() => newName(names[Math.floor(Math.random()*names.length)])}>
                New Name
            </button>
        </div>
    );
}

export default RandomName
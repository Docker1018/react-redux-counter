import React from 'react';

const Counter = ({val, add, sub}) => {
    return (
        <div>
            <button onClick = {() => add()}>+</button>
            <h1>{val}</h1>
            <button onClick = {() => sub()}>-</button>
        </div>
    );
}

export default Counter;
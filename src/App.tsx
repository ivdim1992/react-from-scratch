import React, { useState } from 'react';

export function App() {
    const [count, setCount] = useState(3);

    const addTwo = (n: number) => {
        return n + 2;
    };

    return (
        <div className="app">
            <h1 className="header">{`You have clicked ${count} times. Live`}</h1>
            <button
                type="button"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment
            </button>
            <button
                type="button"
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrement
            </button>
        </div>
    );
}

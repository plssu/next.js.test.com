'use client';

import { useState } from 'react';

export default function Button() {

    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    }
    return (
        <button onClick={onClick}>
            {count}
        </button>
    );
}
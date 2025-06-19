'use client'

import { useState } from "react";

export default () => {

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
        {text && <h1>სალამი {text}!</h1>}
        <input
            type="text"
            value={text}
            onChange={onChange}
            />
        </>
    );
    
        
};
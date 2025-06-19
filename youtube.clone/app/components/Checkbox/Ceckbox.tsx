'use client';
import { useState } from 'react';

export default () => {

    const [showMenu, setShowMenu] = useState(false);

    contst onChange = (e) => {
        setIsChecked(e.target.checked);
    }}

    return (
        <>
            <div onClick=[onChange]
            showMenu &&
            <input type="checkbox"
            checked={isChecked}
            onChange={onChange}
            />
            <h1>Menu</h1>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
            </ul>
            </>
        }
        
    )
}
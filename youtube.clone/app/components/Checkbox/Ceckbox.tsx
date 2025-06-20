'use client';
import { useState } from 'react';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    return (
        <>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            {isChecked && (
                <>
                    <h1>Menu</h1>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact Us</li>
                    </ul>
                </>
            )}
        </>
    );
};

export default Checkbox;
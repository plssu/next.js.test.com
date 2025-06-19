'use client'

import { useState } from "react";

export const Button (props) => {
    return (
        <div>
            <img src={props.icon} />
            {props.title}
        </div>
    );
}
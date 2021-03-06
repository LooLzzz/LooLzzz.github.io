// components/Boop.jsx
import React from "react";
import { animated } from "react-spring";

import { useBoop } from "@/hooks";

export default function Boop({ children, ...boopConfig })
{
    const [style, trigger] = useBoop(boopConfig);

    return (
        <animated.span onMouseDown={trigger} onMouseEnter={trigger} style={style}>
            {children}
        </animated.span>
    );
};

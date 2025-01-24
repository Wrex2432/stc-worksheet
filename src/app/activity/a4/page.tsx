"use client";
import { useState } from "react";
import "./a4.css";
import Link from "next/link";

export default function Activity4() {
    const [color, setColor] = useState<string>('#fff');
    const [scale, setScale] = useState<number>(1);
    const [randomNum, setRandomNum] = useState<number>(0.2);

    const handleClick = (): void => {
        setRandomNum(Math.random());
        const newScale = scale * 2;
        const newColor = '#' + Math.floor(randomNum * 16777215).toString(16);
        setScale(newScale);
        setColor(newColor);
    };

    const handleReset = (): void => {
        setScale(1);
        setColor('#fff');
    };

    return (
        <div className="a4-container">
        <div className="a4-buttons">
            <Link href="/" className="button-style">
            <i className="bx bx-home"></i>
            </Link>
            <button onClick={handleReset} className="button-style">
            <i className="bx bx-reset"></i>
            </button>
        </div>
        <button
            onClick={handleClick}
            className="a4-button"
            style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.3s ease',
            background: color,
        }}
        >
            <span
            style={{
                color: color,
                filter: 'invert(100%)',
            }}
            >
            GROW
            </span>
        </button>
        </div>
    );
}

"use client";
import { useState } from "react";
import "./a4.css";

export default function Activity4() {
    const [isClicked, setIsClicked] = useState(false);
    const [color, setColor] = useState('');
    const [scale, setScale] = useState(1);
    const [randomNum, setRandomNum] = useState(0.2);
    
    const handleClick = () => {
        setRandomNum(Math.random());
        let i = scale * 2;
        let c = '#' + Math.floor(randomNum * 16777215).toString(16);
        setScale(i);
        setColor(c);
        setIsClicked(!isClicked);
    };

    const handleReset = () => {
        setScale(1);
        setColor('#fff');
        setIsClicked(!isClicked);
    }


    return (
        <div className="a4-container">
            <div className="a4-buttons">
                <a href="/" 
                    className='button-style'>
                        <i className='bx bx-home'></i>
                </a>
                <button onClick={handleReset} className="button-style">
                    <i className='bx bx-reset' ></i>
                </button>
            </div>
            <button onClick={handleClick}
                className='a4-button'
                style={{
                    transform: isClicked ? `scale(${scale})` : `scale(${scale})`,
                    transition: 'transform 0.3s ease',
                    background: `${color}`,
                }
            }>
            <span style={{color: `${color}`,filter: `invert(100%)`,}}>GROW</span>
            </button>
        </div>
    )
    
}
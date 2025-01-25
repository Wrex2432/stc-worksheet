"use client";
import "./a1.css";
import Link from "next/link";

export default function Activity1() {

    const triggerCrosshair=()=>{
        console.log(document.querySelector('.crosshair'))
        document.querySelector('.crosshair')?.classList.toggle('hidden');
    }
    return (
        <div className="a1-container">
            <div className='crosshair hidden'>
                <div className="xline"></div>
                <div className="yline"></div>
            </div>
            <div className="center-world">
                <span>Hello World</span>
                
                <div className="a1-buttons">
                    <Link href="/" 
                        className='a1-button button-style'>
                            <i className='bx bx-home'></i>
                    </Link>
                    <button onClick={()=> triggerCrosshair()} 
                        className='a1-button button-style'>
                            <i className='bx bx-target-lock'> </i>
                    </button>
                    <Link href="https://github.com/Wrex2432/stc-worksheet/tree/main/src/app/activity/a1" target="_blank" className="button-style">
                        <i className='bx bxl-github'></i> 
                    </Link>
                </div>
            </div>
        </div>
    )
}
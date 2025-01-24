"use client";
import "./a1.css";

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
                    <a href="/" 
                        className='a1-button button-style'>
                            <i className='bx bx-home'></i>
                    </a>
                    <button onClick={()=> triggerCrosshair()} 
                        className='a1-button button-style'>
                            <i className='bx bx-target-lock'> </i>
                    </button>
                </div>
            </div>
        </div>
    )
}
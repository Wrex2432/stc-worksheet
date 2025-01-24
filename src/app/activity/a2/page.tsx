"use client";
import { useState } from "react";
import Link from "next/link";
import "./a2.css";
export default function Activity2() {
  const [value, setValue]:any = useState("");

  function handleIncrease() {
    let i:any;
    value === "" ? i = 1 
    : i = parseInt(value) + 1;
    setValue(i);
  }

  function handleDecrease() {
    let i:any;
    value === "" ? i = 1 
    : i = parseInt(value) - 1; 
    setValue(i);
  }

  function handleReset() {
    setValue("");
  }
  

  return (
    <>
      <div className="filler"></div>
      <div className="scroll-lock">
        <div className="contain ">
        
          <header>
            <h2 className="text-2xl font-bold">Miguel Mangahas | Activity 2</h2>
          </header>
      
          <main className="a2-main">
            <div>
              <input value={value} id="result" type="number" placeholder="000" readOnly/>
              {value === "" ? 
                <div>Nothing yet...</div> : 
                <div>This is {(value % 2) === 0 ? "even" : "odd"}</div>
              }
            </div>
            <div>
              <button onClick={handleIncrease} className="button-style">
                <i className='bx bxs-up-arrow' ></i>
              </button>
              <button onClick={handleReset} className="button-style">
                <i className='bx bx-reset' ></i>
              </button>
              <button onClick={handleDecrease} className="button-style">
                <i className='bx bxs-down-arrow' ></i>
              </button>
            </div>  
          </main>
  
          <footer>
            <Link href="/" 
              className='a2-button button-style'>
                  <i className='bx bx-home'></i>
            </Link>
          </footer>
  
        </div>
      </div>
    </>
  )
}
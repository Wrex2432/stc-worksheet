"use client";
import { useState } from "react";
import "./a3.css";
export default function Activity3() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  function handleChange(e:any){
    const eValue:any = parseInt(e.target.value);
    if (parseInt(e.target.value) <= 99) {
      e.target.id === "val1" ? setValue1(eValue) : setValue2(eValue); 
    } if (e.target.value === "") {
      e.target.id === "val1" ? setValue1("") : setValue2("");
    } else{
      e.preventDefault;
    }
  }

  function handleReset(){
    setValue1("");
    setValue2("");
  }

  

  return (
    <>
      <div className="filler"></div>
      <div className="scroll-lock">
        <div className="contain ">
        
          <header>
            <h2 className="text-2xl font-bold">Miguel Mangahas | Activity 3</h2>
          </header>
      
          <main className="a3-main">
            <form action="" >
              <input value={value1} id="val1" onChange={handleChange} type="number" min={0} max={99} placeholder="00"/>
              +
              <input value={value2} id="val2" onChange={handleChange} type="number" min={0} max={99} placeholder="00"/>
              =
              <input value={value1+value2} id="result" type="number" placeholder="000" readOnly/>
            </form>
          </main>
  
          <footer>
            <a href="/" 
              className='a3-button button-style'>
                  <i className='bx bx-home'></i>
            </a>
            <button onClick={()=>handleReset()} className="button-style"><i className='bx bx-reset' ></i></button>
          </footer>
  
        </div>
      </div>
    </>
  )
}
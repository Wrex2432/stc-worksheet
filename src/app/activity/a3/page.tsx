"use client";
import { useState } from "react";
import "./a3.css";
import Link from "next/link";
import { Filler } from "@/app/component/filler";
import { Header } from "@/app/component/header";
import { Footer } from "@/app/component/footer";

export default function Activity3() {
  const [value1, setValue1] = useState<string | number>("");
  const [value2, setValue2] = useState<string | number>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue);

    if (parsedValue <= 99 || inputValue === "") {
      if (e.target.id === "val1") {
        setValue1(parsedValue);
      } else {
        setValue2(parsedValue);
      }
    } else {
      e.preventDefault();
    }
  };

  const handleReset = (): void => {
    setValue1("");
    setValue2("");
  };

  return (
    <>
      <Filler/>
      <div className="scroll-lock">
        <div className="contain">
          <Header/>
          <main className="a3-main">
            <form>
              <input
                value={value1}
                id="val1"
                onChange={handleChange}
                type="number"
                min={0}
                max={99}
                placeholder="00"
              />
              <i className='bx bx-plus'></i>
              <input
                value={value2}
                id="val2"
                onChange={handleChange}
                type="number"
                min={0}
                max={99}
                placeholder="00"
              />
              <i className='bx bxl-tailwind-css' ></i>
              <input
                value={(Number(value1) + Number(value2)) === 0 ? "" : (Number(value1) + Number(value2))}
                id="result"
                type="number"
                placeholder="000"
                readOnly
                disabled
              />
            </form>
            <button onClick={handleReset} className="button-style">
              <i className="bx bx-reset"></i>
            </button>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  );
}

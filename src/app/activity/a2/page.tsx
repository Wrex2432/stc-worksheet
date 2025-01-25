"use client";
import { useState } from "react";
import "./a2.css";
import { Header } from "@/app/component/header";
import { Footer } from "@/app/component/footer";

export default function Activity2() {
  const [value, setValue] = useState<number | string>("");

  function handleIncrease(): void {
    setValue((prevValue) => {
      const newValue = prevValue === "" ? 1 : (parseInt(prevValue as string, 10) + 1);
      return newValue;
    });
  }

  function handleDecrease(): void {
    setValue((prevValue) => {
      const newValue = prevValue === "" ? 1 : (parseInt(prevValue as string, 10) - 1);
      return newValue;
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue);

    if (parsedValue <= 999 || inputValue === "") {
      setValue(parsedValue);
    } else {
      e.preventDefault();
    }
  };

  function handleReset(): void {
    setValue("");
  }

  return (
    <>
      <div className="scroll-lock">
        <div className="contain">
          <Header/>
          <main className="a2-main">
            <div>
              <input value={value} onChange={handleChange} id="result" type="number" placeholder="000" />
              {value === "" ? (
                <div>Nothing yet...</div>
              ) : (
                <div>This is {(Number(value) % 2) === 0 ? "even" : "odd"}</div>
              )}
            </div>
            <div className="max-sm:scale-85">
              <button onClick={handleIncrease} className="button-style">
                <i className="bx bxs-up-arrow"></i>
              </button>
              <button onClick={handleReset} className="button-style">
                <i className="bx bx-reset"></i>
              </button>
              <button onClick={handleDecrease} className="button-style">
                <i className="bx bxs-down-arrow"></i>
              </button>
            </div>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  );
}
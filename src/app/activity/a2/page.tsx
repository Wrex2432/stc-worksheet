"use client";
import { useState } from "react";
import Link from "next/link";
import "./a2.css";

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

  function handleReset(): void {
    setValue("");
  }

  return (
    <>
      <div className="filler"></div>
      <div className="scroll-lock">
        <div className="contain">
          <header>
            <h2 className="text-2xl font-bold">Miguel Mangahas | Activity 2</h2>
          </header>

          <main className="a2-main">
            <div>
              <input value={value} id="result" type="number" placeholder="000" readOnly />
              {value === "" ? (
                <div>Nothing yet...</div>
              ) : (
                <div>This is {(Number(value) % 2) === 0 ? "even" : "odd"}</div>
              )}
            </div>
            <div>
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

          <footer>
            <Link href="/" className="a2-button button-style">
              <i className="bx bx-home"></i>
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}
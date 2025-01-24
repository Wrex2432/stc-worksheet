"use client";
import { useState } from "react";
import "./a3.css";
import Link from "next/link";

export default function Activity3() {
  const [value1, setValue1] = useState<string | number>("");
  const [value2, setValue2] = useState<string | number>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;
    const parsedValue = inputValue === "" ? "" : parseInt(inputValue);

    if (parseInt(parsedValue) <= 99 || inputValue === "") {
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
      <div className="filler"></div>
      <div className="scroll-lock">
        <div className="contain">
          <header>
            <h2 className="text-2xl font-bold">Miguel Mangahas | Activity 3</h2>
          </header>

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
              +
              <input
                value={value2}
                id="val2"
                onChange={handleChange}
                type="number"
                min={0}
                max={99}
                placeholder="00"
              />
              =
              <input
                value={String(value1) + String(value2)}
                id="result"
                type="number"
                placeholder="000"
                readOnly
              />
            </form>
          </main>

          <footer>
            <Link href="/" className="a3-button button-style">
              <i className="bx bx-home"></i>
            </Link>
            <button onClick={handleReset} className="button-style">
              <i className="bx bx-reset"></i>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

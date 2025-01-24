"use client";
import Link from "next/link";

export const Navigation = () => {
  return (
    <>
      <Link href="/activity/a1" className="nav-button button-style">A1</Link>
      <Link href="/activity/a2" className="nav-button button-style">A2</Link>
      <Link href="/activity/a3" className="nav-button button-style">A3</Link>
      <Link href="/activity/a4" className="nav-button button-style">A4</Link>
      <Link href="/activity/a5" className="nav-button button-style">A5</Link>
      <Link href="/activity/a6" className="nav-button button-style">A6</Link>
      <Link href="/activity/a7" className="nav-button button-style">A7</Link>
      <Link href="/activity/a8" className="nav-button button-style">A8</Link>
    </>
  );
}

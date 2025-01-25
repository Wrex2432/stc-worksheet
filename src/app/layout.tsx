import type { Metadata } from "next";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';
import "./temp.css"
import "./temp2.css"
import { Filler } from "./component/filler";

export const metadata: Metadata = {
  title: "MIGUEL M. MANGAHAS | Junior Web Developer",
  description: "This is for Sta. Clara International Corporation Technical Worksheet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Filler/>
          {children}
      </body>
    </html>
  );
}

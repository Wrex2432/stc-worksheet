import {Navigation} from "./component/nav";

export default function Home() {
  return (
    <>
    <div className="filler"></div>
    <div className="scroll-lock">
      <div className="contain ">
      
        <header>
          <h2 className="text-2xl font-bold">Miguel Mangahas | Technical Worksheet</h2>
        </header>
    
        <main className="main-rootpage" >
        <Navigation/>
        </main>

        <footer>
          <p>foot</p>
        </footer>

      </div>
    </div>
    </>
  );
}

import {Navigation} from "./component/nav";
import { Header } from "./component/header";
import { Footer } from "./component/footer";
export default function Home() {
  return (
    <>
      <div className="scroll-lock">
        <div className="contain">
          <Header/>
          <main className="main-rootpage" >
            <Navigation/>
          </main>
          <Footer/>
        </div>
      </div>
      
    </>
  );
}

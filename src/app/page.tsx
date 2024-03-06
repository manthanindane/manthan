import Image from "next/image";
import Heropage from "./elements/Heropage";
import Navbar from "./elements/Navbar";
import Page2 from "./elements/Page2";
import Footer from "./elements/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
     <Heropage/>
     <Page2/>
     <Footer/>
    </main>
  );
}

import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/Navbar";
import Skills from "../components/Skills/Skills";
import Works from "../components/Works/Works";

export default function Home() {
  return (
    <>
      <header className="header" id="header">
        <Navbar />
        <Header />
      </header>
      <main>
        <Skills />
        <Works />
        <Contact />
      </main>
    </>
  );
}

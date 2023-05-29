import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/Navbar";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <>
      <header className="header" id="header">
        <Navbar />
        <Header />
      </header>
      <main>
        <Skills />
      </main>
    </>
  );
}

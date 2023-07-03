import Contact from "../layouts/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import Header from "../layouts/Header/Header";
import Skills from "../layouts/Skills/Skills";
import Works from "../layouts/Works/Works";
import ScrollToTopButton from "../components/ScrollBack/ScrollBack";

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
        <ScrollToTopButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

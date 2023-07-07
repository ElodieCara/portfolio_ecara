import Contact from "../layouts/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import Header from "../layouts/Header/Header";
import Skills from "../layouts/Skills/Skills";
import Works from "../layouts/Works/Works";
import ScrollToTopButton from "../components/ScrollBack/ScrollBack";
import NavSocial from "../components/NavBar/NavSocial";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Header className="header" id="header" />
        <NavSocial />
      </header>
      <main>
        <Skills id="skills" />
        <Works id="works" />
        <Contact id="contact" />
        <ScrollToTopButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

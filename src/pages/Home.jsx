import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/Navbar";

export default function Home() {
  return (
    <header className="header" id="header">
      <Navbar />
      <Header />
    </header>
  );
}

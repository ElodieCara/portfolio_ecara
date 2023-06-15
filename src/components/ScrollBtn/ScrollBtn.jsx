import Arrow from "@/assets/Arrow 1.svg";

const Scroll = () => {
  const handleScrollToWorks = () => {
    window.scrollTo({
      top: document.getElementById("works").offsetTop, // Renvoie à la position de la section "Works"
      behavior: "smooth", // Ajoute un défilement fluide
    });
  };
  return (
    <>
      <div className="scroll">
        <div className="scroll__text">Projects</div>
        <div className="scroll__arrow" onClick={handleScrollToWorks}>
          <img src={Arrow} alt="" className="scroll__arrow__img" />
        </div>
      </div>
    </>
  );
};

export default Scroll;

import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const ScrollToTop = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return <div ref={scrollRef} />;
};

export default ScrollToTop;

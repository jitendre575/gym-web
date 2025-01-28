import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button  className="scroolbtn"
          onClick={scrollToTop}
          style={{
            height: "40px",
            width:"40px",
            position: "fixed",
            bottom: "15px",
            right: "15Px",
            padding: "0px",
            fontSize: "24px",
            backgroundColor: "#1d1b18",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex:2,
          }}
        >
        <FaAngleUp />
        </button>
      )}
    </div>
  );
};

export default Scroll;
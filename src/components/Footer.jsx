import React, { useContext } from "react";
import ManageContext from "./context/ManageContext";

function Footer() {
  const { darkMode } = useContext(ManageContext);
  return (
    <div>
      <p
        className={`fs-5 text-center m-0 pb-3 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Made with ❤️ By{" "}
        <a href="https://linkedin.com/in/theaayushrana" target="_blank">
          Aayush Rana
        </a>
      </p>
    </div>
  );
}

export default Footer;

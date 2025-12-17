import React, { useContext } from "react";
import { ThemeContext } from "../../context/MainContext";

function Navbar() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div 
      style={{
        background: state.dark ? "#111" : "#eee",
        color: state.dark ? "#fff" : "#000",
          padding: "20px",
          display: "flex",
        gap: "1200px"
      }}
    >
      <h2>Abdumajid Xolmatov</h2>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.dark ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}

export default Navbar;

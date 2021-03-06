import React from "react";

function Header() {
  return (
    <div style={headerStyle}>
      <h1 style={{ textAlign: "center", fontSize: "calc(100% + 3.5vw)" }}>
        Calculator
      </h1>
    </div>
  );
}
const headerStyle = {
  backgroundColor: "#696773",
  color: "#fff",
  width: "70%",
  padding: "0.5rem",
  // margin: '0 auto 2rem auto'
  margin: "0 auto",
  marginBottom: "2rem",
  maxWidth: "100%",
};

export default Header;

import React from "react";
import "./Appbar.css";
import Logo from "../../assets/Vector.svg";
export default function Appbar() {
  return (
    <div className="appbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h1>Reneer Trajar</h1>
      </div>
      <div className="links">
      <a href="/">
EMPRESA
</a>
<a href="/">
CAMISARIA
</a>
<a href="/">
ALFAITARIA
</a>
<a href="/">
DEPOIMENTOS
</a>
<a href="/">
CONTATO
</a>
      </div>
          
    </div>
  );
}

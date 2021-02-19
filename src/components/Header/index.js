import React from "react";
import "./header.css";
import Logo from "../../assets/images/logo.png";
import Landscape from "../../assets/images/landscape.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export default function Header() {
  return (
    <header>
      <div className="content">
        <div>
          <img src={Logo} alt="Logotipo" className="header__logo" />

          <div className="dropdown">
            <button className="dropbtn">
              <MenuIcon />
              Categorias
            </button>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </div>
        </div>

        <label className="input-label">
          <input placeholder="O que você procura" />
          <SearchIcon style={{ color: "#b5bbb2" }} />
        </label>

        <div>
          <a href="/" className="btn-login">
            <AccountCircleIcon style={{ color: "#fff" }} />
            ENTRAR
          </a>
          <a href="/" className="btn-login">
            <ShoppingBasketIcon style={{ color: "#15b2dd", fontSize: 16 }} />
          </a>
        </div>
      </div>

      <div className="header-banner">
        <img src={Landscape} alt="banner" className="header-banner__image" />
      </div>
    </header>
  );
}

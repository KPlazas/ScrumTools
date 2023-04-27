import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";


export function Layout (){  
  
  const [t, i18n] = useTranslation("global");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return <div>
    <header class="header">
      <div class="logo">
        <Link class="title" to="/Home">AgileTools</Link>
      </div>
      <nav>
        <ul class="nav-links">
          <li><Link class="links" to="/Home">{t("nav-bar.Home")}</Link></li>
          <li><Link class="links" to="/Login">{t("nav-bar.Log In")}</Link></li>
          <li><Link class="links" to="/SignUp">{t("nav-bar.Sign Up")}</Link></li>
        </ul>
      </nav> 
      <div class="language">
      <button class ="btn" onClick={() => changeLanguage('en')}>{t("nav-bar.english")}</button>
      <button class ="btn" onClick={() => changeLanguage('es')}>{t("nav-bar.español")}</button> 
      </div>        
    </header>

    <Outlet />

  </div>
}
export default Layout;
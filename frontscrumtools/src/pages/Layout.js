import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import LoginButton from "../auth/Login";
import { getAuthenticatedUser } from "../config/auth";

export function Layout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
      async function getUser() {
          const user = await getAuthenticatedUser();
          setUser(user);
      }
      getUser();
  }, []);

  const [t, i18n] = useTranslation("global");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return <>
    <header className="header">
      <div className="logo">
      <img src="Logo.png" alt="Logo de la marca" />
        <Link className="title" to="/Home">   AgileTools</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link className="links" to="/Home">{t("nav-bar.Home")}</Link></li>
          <li><Link className="links" to="/SignUp">{t("nav-bar.Sign Up")}</Link></li>
          {user ? (<>
            <li><Link className="links" to="/CreateProject">Crear proyecto</Link></li>
            <li><Link className="links" to="/ViewProjects">{user.profile.name}</Link></li>
            <li><Link className="links" to="/logout">Logout</Link></li>
          </>):(<><li><LoginButton/></li></>)}
          
        </ul>
      </nav>
      <div className="language">
        <button className="btn" onClick={() => changeLanguage('en')}>{t("nav-bar.english")}</button>
        <button className="btn" onClick={() => changeLanguage('es')}>{t("nav-bar.español")}</button>
      </div>
    </header >  
    <Outlet />
  </>
}
export default Layout;
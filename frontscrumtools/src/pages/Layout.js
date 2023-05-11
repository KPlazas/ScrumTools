import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import LoginButton from "../auth/Login";
import { getAuthenticatedUser } from "../config/auth";
import Logo from "./img/Logo.png";

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
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/Signup">
            <img
              src={Logo}
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            AgileTools
          </a>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link" to="/">
                  {t("nav-bar.Home")}
                </Link>
              </li>
              {user ? (
                <>                  
                  <li class="nav-item">
                    <Link className="nav-link" to="/ViewProjects">
                      {user.profile.name}
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/logout">
                      {t("nav-bar.Log Out")}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="nav-link" to="/SignUp">
                      {t("nav-bar.Sign Up")}
                    </Link>
                  </li>
                  <li>
                    <LoginButton />
                  </li>
                </>
              )}
              <button className="btn" onClick={() => changeLanguage("en")}>
                {t("nav-bar.english")}
              </button>
              <button className="btn" onClick={() => changeLanguage("es")}>
                {t("nav-bar.español")}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Layout;

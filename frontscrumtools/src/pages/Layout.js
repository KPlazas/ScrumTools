import { Link, Outlet } from "react-router-dom";
import Api from "../services/Api";
import {useTranslation} from "react-i18next";

const Layout=()=>{
  const [t,i18n]=useTranslation("global");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  
return <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/Home">ScrumTools</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/Home">{t("nav-bar.Home")} <span class="sr-only"></span></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Login">{t("nav-bar.Log In")}</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/SignUp">{t("nav-bar.Sign Up")}</Link>
            </li>                      
            
          </ul>  
          <div class="button-languages">
              <button onClick={() => changeLanguage('en')}>{t("nav-bar.english")}</button>
              <button onClick={() => changeLanguage('es')}>{t("nav-bar.español")}</button>
            </div>        
        </div>
      </nav>      
      <Outlet/>
      <Api/>
</div>
}
export default Layout;
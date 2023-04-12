import { Link, useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";
export function SignUp (){
    const [t,i18n]=useTranslation("global");

    return <div>
        <div class="container-form-register">            
             <div class="container-header">
             <h2>{t("form.register.title")}</h2>
             </div>
             <div class="container-body">
             <form onSubmit>
                <div class="form-group">
                    <i class="fa-solid fa-user fa-lg"></i><input type="text" htmlFor="Name" placeholder={t("form.register.name-placeholder")} required></input>
                </div>
                <div class="form-group">
                   <input type="text" htmlFor="LastName" placeholder={t("form.register.last-placeholder")} required></input>
                </div>
                <div className="form-group">
                    <i class="bi bi-envelope-at fa-lg"></i><input type="email" htmlFor="Email" placeholder={t("form.register.email-placeholder")} required></input>
                </div>
                <div class="form-group">
                    <i class="fa-sharp fa-solid fa-key fa-lg"></i><input type="password" htmlFor="Password" placeholder={t("form.register.password-placeholder")} required></input>
                </div>                
                <button type='submit'>{t("form.register.title")}</button><br></br>
                <small><Link to="/Login">{t("form.register.have-account")}</Link></small>
            </form>
             </div>             
        </div>
    </div>
}
export function Login(){
    const [t,i18n]=useTranslation("global");

    const navigate=useNavigate();
    const ClickHandler=()=>{
        navigate('/CreateProject', {replace:true});
    }
    return <div class="container-form-login">
    <div class="container-header">
        <h2>{t("form.login.title")}</h2>
    </div>
    <div class="container-body">
        <form onSubmit>                
            <div className="form-group">
                <i class="bi bi-envelope-at fa-lg"></i> <input type="email" htmlFor="Email" placeholder={t("form.login.email-placeholder")} required></input>
            </div>
            <div class="form-group">
                <i class="fa-solid fa-key fa-lg" ></i> <input type="password" htmlFor="Password" placeholder={t("form.login.password-placeholder")} required></input>
            </div>                
            <button onClick= {ClickHandler} type='submit'>{t("form.login.title")}</button><br></br><br/>
            <small><Link to="/SignUp">{t("form.login.Create-account")}</Link></small>
        </form>
    </div>
    
</div>
}
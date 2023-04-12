import { useNavigate } from "react-router-dom"
import {useTranslation} from "react-i18next";

export function CreateProject() {
    
    const [t,i18n]=useTranslation("global");

    const navigate=useNavigate();
    const ClickHandler=()=>{
        navigate ('/CreateStory',{replace:true});
    }

    return <div>
        <div class="contactBody">
            <div class="wrapper">
                <div class="title">
                </div>
                <form class="form">
                    <input type="text" class="name entry " placeholder={t("creation.project.name")} />                    
                    <button onClick={ClickHandler} class="submit entry" onclick="thanks()">{t("creation.project.button-send")}</button>
                </form>
                <div class="shadow"></div>
            </div>
            <script src="app.js"></script>
        </div>
    </div>
}
export function CreateUS (){
    const [t,i18n]=useTranslation("global");
    return <div>
        <section id="contact">
	<div class="sectionheader">	<h1>{t("creation.userStory.title")}</h1></div>
	<article>
	<p>{t("creation.userStory.description")}</p>
		
			<label for="checkcontact" class="contactbutton"><div class="mail"></div></label><input id="checkcontact" type="checkbox"/>
	
			<form action="" method="post" class="contactform">
				<p class="input_wrapper"><input type="text" name="contact_nom" value=""  id ="contact_nom"/><label for="contact_nom">{t("creation.userStory.ID-HU")}</label></p>
				<p class="input_wrapper"><input type="text" name="contact_nom" value=""  id ="contact_nom"/><label for="contact_nom">{t("creation.userStory.Name-HU")}</label></p>
				<p class="input_wrapper"><input type="text" name="contact_email" value=""  id ="contact_email"/><label for="contact_email">{t("creation.userStory.Dificulty-HU")}</label></p>
				<p class="input_wrapper"><input type="text" name="contact_sujet" value=""  id ="contact_sujet"/><label for="contact_sujet">{t("creation.userStory.No-Epic")}</label></p>
				<br/>
				<p class="textarea_wrapper">{t("creation.userStory.describe")}<textarea name="contact_message" id="contact_message" > </textarea></p>
				<p class="submit_wrapper"><button type="submit">{t("creation.userStory.save")}</button></p>			
			</form>
	</article>
</section>
        </div>
}
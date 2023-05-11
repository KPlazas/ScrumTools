import { useTranslation } from "react-i18next";
import '../App.css';
import Layout from "./Layout";

export function CreateUS() {
    const [t, i18n] = useTranslation("global");
    return <div>
        <section id="contact">
            <div class="sectionheader">	<h1>{t("creation.userStory.title")}</h1></div>
            <article>
                <p>{t("creation.userStory.description")}</p>

                <label for="checkcontact" class="contactbutton"><div class="mail"></div></label><input id="checkcontact" type="checkbox" />

                <form action="" method="post" class="contactform">
                    <p class="input_wrapper"><input type="text" name="contact_nom" value="" id="contact_nom" /><label for="contact_nom">{t("creation.userStory.ID-HU")}</label></p>
                    <p class="input_wrapper"><input type="text" name="contact_nom" value="" id="contact_nom" /><label for="contact_nom">{t("creation.userStory.Name-HU")}</label></p>
                    <p class="input_wrapper"><input type="text" name="contact_email" value="" id="contact_email" /><label for="contact_email">{t("creation.userStory.Dificulty-HU")}</label></p>
                    <p class="input_wrapper"><input type="text" name="contact_sujet" value="" id="contact_sujet" /><label for="contact_sujet">{t("creation.userStory.No-Epic")}</label></p>
                    <br />
                    <p class="textarea_wrapper">{t("creation.userStory.describe")}<textarea name="contact_message" id="contact_message" > </textarea></p>                    
                </form>
            </article>
        </section>
    </div>
}
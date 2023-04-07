import { useNavigate } from "react-router-dom"

export const CreateProject = () => {
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
                    <input type="text" class="name entry " placeholder="Nombre de proyecto" />

                    <input type="text" class="email entry" placeholder="cualquier cosa" />

                    <textarea class="message entry" placeholder="Cualquier cosa"></textarea>

                    <button onClick={ClickHandler} class="submit entry" onclick="thanks()">Enviar datos</button>
                </form>
                <div class="shadow"></div>
            </div>
            <script src="app.js"></script>
        </div>
    </div>
}
export const CreateUS =()=>{
    return <div>
        <section id="contact">
	<div class="sectionheader">	<h1>Crea tu historia de usuario</h1></div>
	<article>
	<p>Las historias de usuario son unas pocas frases en lenguaje sencillo que describen 
		el resultado deseado. No entran en detalles, ya que los requisitos se añaden más tarde, 
		una vez acordados por el equipo. Las historias encajan perfectamente en marcos ágiles 
		como scrum y kanban.</p>
		
			<label for="checkcontact" class="contactbutton"><div class="mail"></div></label><input id="checkcontact" type="checkbox"/>
	
			<form action="" method="post" class="contactform">
				<p class="input_wrapper"><input type="text" name="contact_nom" value=""  id ="contact_nom"/><label for="contact_nom">ID HU</label></p>
				<p class="input_wrapper"><input type="text" name="contact_nom" value=""  id ="contact_nom"/><label for="contact_nom">Nombre HU</label></p>
				<p class="input_wrapper"><input type="text" name="contact_email" value=""  id ="contact_email"/><label for="contact_email">Dificultad HU</label></p>
				<p class="input_wrapper"><input type="text" name="contact_sujet" value=""  id ="contact_sujet"/><label for="contact_sujet">N° Epica</label></p>
				<br/>
				<p class="textarea_wrapper">Descripción de historia de usuario:<textarea name="contact_message" id="contact_message" > </textarea></p>
				<p class="submit_wrapper"><input type="submit" value="Guardar HU"/></p>			
			</form>
	</article>
</section>
        </div>
}
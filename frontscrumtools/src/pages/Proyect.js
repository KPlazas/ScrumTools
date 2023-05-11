import { useParams } from "react-router-dom";
import { FetchProjectById } from "../services/ProyectServices";
import { FetchStoriesById, CreateStory } from "../services/StoriesService";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { useTranslation } from "react-i18next";

function Project() {
  const [t, i18n] = useTranslation("global");
  const { id } = useParams();
  const project = FetchProjectById(id);
  const stories = FetchStoriesById(id);

  const [newStorie, setNewStorie] = useState({
    StoryName: "",
    StoryDescription: "",
    StoryDifficulty: 0,
    ProjectId: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStorie((prevExerciseData) => ({
      ...prevExerciseData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Aquí puedes hacer lo que necesites con los valores ingresados en el formulario

    CreateStory(newStorie);
    // Limpia el formulario después de enviar los datos
  };
  return (
    <>
      <Layout />
      <br></br>
      <br></br>
      <br></br>
      <div class="contenedor-father">
        <div class="contenedor-child1">
          <div className="contenedor_info">
            {project ? (
              <>
                <div class="contenedor_info">
                  <div class="contenido_info">
                    <h1>{project.ProjectName}</h1>
                    <p>
                      {t("creation.project.date")} : {project.DataCreation}
                    </p>
                  </div>
                </div>
                <br></br>
                <div class="historiasProyect">
                  <div class="cards">
                    {stories.map((objeto, index) => (
                      <Link
                        to={"/storie/" + objeto.Id}
                        class="card red"
                        key={index}
                      >
                        <p class="tip">
                          {t("creation.userStory.Name-HU")}: {objeto.StoryName}
                        </p>
                        <p class="second-text">
                          {t("creation.Story.StoryDifficulty")}:  
                          {objeto.StoryDifficulty}
                        </p>
                        <p class="second-text">
                          {t("creation.userStory.describe")}:   
                          {objeto.StoryDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>{t("creation.Story.Loading")}</p>
              </>
            )}
          </div>
        </div>
        <div ckass="contenedor-child2">
          <div class="contenedor_CHU">
            <form onSubmit={handleSubmit} class="Formulario_CHU">
              <div className="mb_CHU">
                <label class="laber_CHU">{t("creation.Story.StoryName")}</label>
                <input
                  type="text"
                  class="input_CHU"
                  id="StoryName"
                  name="StoryName"
                  value={newStorie.StoryName}
                  onChange={handleChange}
                />
              </div>
              <div class="mb_CHU">
                <label class="laber_CHU">
                  {t("creation.Story.StoryDescription")}
                </label>
                <input
                  type="text"
                  class="input_CHU"
                  id="StoryDescription"
                  name="StoryDescription"
                  value={newStorie.StoryDescription}
                  onChange={handleChange}
                />
              </div>
              <div class="mb_CHU">
                <label class="laber_CHU">
                  {" "}
                  {t("creation.Story.StoryDifficulty")}:
                </label>
                <input
                  type="number"
                  class="input_CHU"
                  id="StoryDifficulty"
                  name="StoryDifficulty"
                  value={newStorie.StoryDifficulty}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" class="btn_crear_CHU">
                {t("creation.project.button-send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;

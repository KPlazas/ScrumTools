import { useParams, useNavigate } from "react-router-dom";
import { FetchStoryById } from "../services/StoriesService";
import Layout from "./Layout";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Storie() {
  const [t, i18n] = useTranslation("global");
  const { id } = useParams();
  const storie = FetchStoryById(id);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const response = await axios.get(
      "https://agiletools-api.azurewebsites.net/api/Stories/delete/" + id
    );
    alert("Historia Borrada");
    navigate("/project/" + storie.ProjectId);
  };

  return (
    <>
      <Layout />
      <br></br>
      <br></br>
      <br></br>
      {storie && (
        <>
          <div className="container_HU">
            <div class="historias">
              <h1>{storie.StoryName}</h1>
              <br></br>
              <p>{t("creation.Story.Description")}:    {storie.StoryDescription}</p>
              <br></br>
              <p>{t("creation.Story.Difficulty")}:   {storie.StoryDifficulty}</p>
              <br></br>
              <button class="fun-button" onClick={handleDelete}>
              {t("creation.Story.DeleteHU")}
            </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Storie;

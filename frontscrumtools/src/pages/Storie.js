import { useParams, useNavigate } from "react-router-dom";
import { FetchStoryById, DeleteStory } from "../services/StoriesService";
import Layout from "./Layout";
import axios from "axios";

function Storie() {
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
      <Layout class="mini"/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {storie && (
        <>
          <div className="container">
            <div class="historias">
              <h1>{storie.StoryName}</h1>
              <p>Descripcion {storie.StoryDescription}</p>
              <p>Dificultad {storie.StoryDifficulty}</p>
            </div>
          </div>
          <button class="fun-button" onClick={handleDelete}>
            Borrar
          </button>
        </>
      )}
    </>
  );
}
export default Storie;

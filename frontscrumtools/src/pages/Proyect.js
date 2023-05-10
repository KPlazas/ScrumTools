import { useParams } from "react-router-dom";
import { FetchProjectById } from "../services/ProyectServices";
import { FetchStoriesById, CreateStory } from "../services/StoriesService";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

function Project() {
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
    <Fragment>
      <Layout />
      <div className="container">
        {project ? (
          <>
            <h1>Detalles del Proyecto</h1>
            <p>ID: {project.Id}</p>
            <p>Nombre: {project.ProjectName}</p>
            <p>Fecha de Creación: {project.DataCreation}</p>
            {stories && (
              <>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stories.map((objeto, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Link to={"/storie/" + objeto.Id}>
                            {objeto.StoryName}
                          </Link>
                        </td>
                        <td>{objeto.StoryDescription}</td>
                        <td>{objeto.StoryDifficulty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="storyName" className="form-label">
            Story Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="StoryName"
            name="StoryName"
            value={newStorie.StoryName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="storyDescription" className="form-label">
            Story Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="StoryDescription"
            name="StoryDescription"
            value={newStorie.StoryDescription}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="storyDifficulty" className="form-label">
            Story Difficulty:
          </label>
          <input
            type="number"
            className="form-control"
            id="StoryDifficulty"
            name="StoryDifficulty"
            value={newStorie.StoryDifficulty}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
}
export default Project;

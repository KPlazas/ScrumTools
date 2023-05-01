import { Fragment, useState } from "react";
import { GetProyect, GetProyects } from "../services/ProyectServices";
import { Link } from "react-router-dom";
function ViewProjects() {
  const [id, setId] = useState(0);
  const [proyects, setProyects] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    setProyects(GetProyects(id));
  };
  const handleChange = (e) => {
    setId(e.target.Categories);
  };

  return (
    <Fragment>
      <label>
        Categories:
        <input
          type="text"
          name="Categories"
          value={id}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>enviar</button>
      <p>{id}</p>
      <br />

      <div className="container-fluid w-75">
        {proyects.length!==0 ? (<>
          {proyects.map(proyects => (
            <div className="card" key={proyects.projectId}>
              <div className="card-body">
                <h5 className="card-title">{proyects.projectName}</h5>
                <p className="card-text">Fecha: {proyects.dataCreation}</p>
                <Link to={"/project/" + proyects.projectId}>Ver historias de usuario</Link>
              </div>
            </div>
          ))}
        </>) : (<></>)}
      </div>
      <div className="container-projects">
        <div className="card2">
          <h1>hola</h1>
        </div>
      </div>


    </Fragment>
  );
}
export default ViewProjects;

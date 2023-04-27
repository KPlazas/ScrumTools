import { Fragment } from "react";
import { GetProyects } from "../services/ProyectServices";
import { Link } from "react-router-dom";
function ViewProjects() {
  const proyects = GetProyects();
  return (
    <Fragment>
      <div className="container-fluid w-75">        
        {proyects.map(proyects => (
          
          <div className="card" key={proyects.projectId}>
            <div className="card-body">
              <h5 className="card-title">{proyects.projectName}</h5>                                                 
              <p className="card-text">Fecha: {proyects.dataCreation}</p>              
              <Link to={"/project/" + proyects.projectId}>Ver historias de usuario</Link>
            </div>
          </div>
        ))}
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

import { Fragment } from "react";
import { GetProyects } from "../services/ProyectServices";
import { Link } from "react-router-dom";
function ViewProjects() {
  const proyects = GetProyects();
  return (
    <Fragment>
      
      <div className="container-fluid w-75">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre del proyecto</th>
            <th>     Fecha de creación</th>
            <th>     Ir</th>
          </tr>
        </thead>
        <tbody>
          {proyects.map((item) => (
            <tr key={item.id}>
              <td>{item.projectName}</td>
              <td>{item.dataCreation}</td>
              <td><Link to={"/project/"+item.projectId}>Proyecto  {item.projectId}</Link></td>
              
            </tr>
          ))}
        </tbody>
      </table>
   
       
      </div>
    </Fragment>
  );
}
export default ViewProjects;

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { GetUsers } from "../services/UserService";
function ViewUsers() {
  const users = GetUsers();
  return (
    <Fragment>
      <div className="container-fluid w-75">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre del usuario</th>
            <th>Apellido del usuario</th>
            <th>Correo electrocnico</th>
            <th>Rol del usuario</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.userName}</td>
              <td>{item.userLastName}</td>
              <td>{item.userEmail}</td>
              <td>{item.userRol}</td>
              <td><Link to={"/user/"+item.userId}>Usuarios   {item.userId}</Link></td>
              
            </tr>
          ))}
        </tbody>
      </table>
   
       
      </div>
    </Fragment>
  );
}
export default ViewUsers;
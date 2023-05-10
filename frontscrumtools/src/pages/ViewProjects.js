import { Fragment, useState, useEffect } from "react";
import { fetchProjects } from "../services/ProyectServices";
import { getAuthenticatedUser } from "../config/auth";
import { Link } from "react-router-dom";
import Layout from "./Layout";
function ViewProjects() {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const user = await getAuthenticatedUser();
      setUser(user);
    }
    getUser();
  }, []);

  useEffect(() => {
    const fetchData = async (user) => {
      const data = await fetchProjects(user.profile.sub);
      setProjects(data);
    };
    if (user) {
      fetchData(user);
    }
  }, [user]);

  return (
    <Fragment>
      <Layout />
      <div className="container">
        {projects && (
          <table className="table">
            <thead>
              <tr>
                <th>Índice</th>
                <th>Project Name</th>
                <th>Data Creation</th>
                <th>Id</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{project.projectName}</td>
                  <td>{new Date(project.dataCreation).toLocaleString()}</td>
                  <td>
                    <Link to={"/project/" + project.id}>{project.id}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Fragment>
  );
}
export default ViewProjects;

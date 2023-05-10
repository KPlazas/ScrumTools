import { Fragment, useState, useEffect } from "react";
import { fetchProjects } from "../services/ProyectServices";
import { getAuthenticatedUser } from "../config/auth";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import NewProject from "./NewProject";
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
      <Layout/>
      <div
        class="container "
        style={{
          background: "white",
          borderRadius: "3px",
          boxShadow: "0px 0px 0.8px 0px",
          fontFamily: "",
          marginBottom: "50px",
        }}
      >
        <section id="home">
          <br />
          <h1>Mis proyectos</h1>
          <br />
        </section>

        {projects && (
          <div class="container grid-cards">
            {projects.map((project, index) => (
              <Link class="card" to={"/project/" + project.id} key={index}>
                <div class="card-img"></div>
                <div class="card-info">
                  <div class="card-text">
                    <p class="text-title">{project.projectName}</p>
                    <p class="text-subtitle">{project.dataCreation}</p>
                  </div>
                  <div class="card-icon">
                    <i
                      class="bi bi-arrow-right"
                      id="icon"
                      style={{ color: "white", fontSize: "20px" }}
                    ></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NewProject /> 
        </div>
      </div>
    </Fragment>
  );
}
export default ViewProjects;

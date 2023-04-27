import { useEffect, useState } from "react";
import axios from "axios";

export function GetProyects(id) {
  const [projects, setProyects] = useState([]);
  useEffect(() => {
    const fetchProyects = async () => {
      const response = await axios.get("https://localhost:7276/api/Projects/"); //+id)
      setProyects(response.data);
    };
    fetchProyects();
  }, []);
  return projects;
}
export function GetProyect(id) {
  const [project, setProyect] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(
        "https://localhost:7276/api/Projects/" + id
      );
      const object = response.data;
      setProyect(object);
    };
    fetchProject();
  }, [id]);

  return project;
}

export function NewProject(project) {
  console.log(project);
  axios
    .post(
      "https://localhost:7276/api/Projects",
      project,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response);
      alert("Agregado exitosamente!");
      return "Agregado";
    })
    .catch((error) => {
      console.error(error.response);
      alert("¡Error al registrar el proyecto!");
      return "No ha sido agregado";
    });
}

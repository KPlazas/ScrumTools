import { useEffect, useState } from "react";
import axios from "axios";


export async function GetProyects(id) {
  const [projects, setProyects] = useState([]);
  const requestBody = {
    idUser: id
  };
  return await axios.post('https://localhost:7276/api/Projects', requestBody, {
    headers: {
      'accept': '/',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log('La compilación fue:', response.data);
      return response.data.output;
    })
    .catch(error => {
      console.error('Hubo un error:', error);
      return "Error en la compilación";
    }); 
 
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

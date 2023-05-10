import axios from "axios";
import { useEffect, useState } from "react";

export async function fetchProjects(projectId) {
  const url = `https://agiletools-api.azurewebsites.net/api/Projects/All/${projectId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        accept: "text/plain",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los proyectos");
  }
}

export function FetchProjectById(id) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(
        "https://agiletools-api.azurewebsites.net/api/Projects/" + id
      );
      const object = response.data;
      setProject(object);
    };
    fetchProject();
  }, [id]);

  return project;
}

export async function createProject(projectData) {
  const url = "https://agiletools-api.azurewebsites.net/api/Projects";

  try {
    const response = await axios.post(url, projectData, {
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error al crear el proyecto");
  }
}

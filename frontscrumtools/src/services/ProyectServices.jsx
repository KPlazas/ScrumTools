import { useEffect, useState } from "react";
import axios from "axios";

export async function fetchProjects(id) {
  const url = `https://localhost:7276/api/Projects/All/${id}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'accept': 'text/plain',
      },
    });

    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(`Error fetching projects: ${error.response.status}`);
  }
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
export const createProject = async (projectData) => {
  try {
    const response = await axios.post('https://localhost:7276/api/Projects', projectData, {
      headers: {
        'accept': 'text/plain',
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al crear el proyecto:', error);
    throw error;
  }
};

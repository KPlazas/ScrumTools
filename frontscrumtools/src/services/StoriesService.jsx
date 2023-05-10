import axios from "axios";
import { useEffect, useState} from "react";

export function FetchStoriesById(id) {
  const [project, setProject] = useState(null);
  console.log(id);
  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(
        "https://agiletools-api.azurewebsites.net/api/Stories/stories/" + id
      );
      const object = response.data;
      setProject(object);
      console.log(object);
    };
    fetchProject();
  }, [id]);

  return project;
}

export function FetchStoryById(id) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(
        "https://agiletools-api.azurewebsites.net/api/Stories/story/" + id
      );
      const object = response.data;
      setProject(object);
    };
    fetchProject();
  }, [id]);

  return project;
}

export function CreateStory(newExercise) {
  console.log(newExercise);
  axios.post("https://agiletools-api.azurewebsites.net/api/Stories", newExercise, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log(response);
      alert("Agregado exitosamente!");
      return "Agregado";
    })
    .catch((error) => {
      console.error(error.response);
      alert("¡Error al registrar el ejercicio!");
      return "No ha sido agregado";
    });
}

export function DeleteStory(id) {

  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(
        "https://agiletools-api.azurewebsites.net/api/Stories/delete/" + id
      );
      alert("Borrada")
    };
    fetchProject();
  }, [id]);
}
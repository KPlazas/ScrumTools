import { useEffect, useState } from "react";
import axios from "axios";

export function GetStories(id){
    const [stories, setStories]=useState([]);
    useEffect(()=>{
        const fetchStories= async ()=>{
            const response= await axios.get('https://localhost:7276/api/Stories/')//+id)
            setStories(response.data);
        };
        fetchStories();
    }, []);
    return stories;
}
export function GetStorie(id) {
    const [storie, setStorie]=useState([]);
  
    useEffect(() => {
      const fetchStorie = async () => {
        const response = await axios.get('https://localhost:7276/api/Stories/' + id);
        const object = response.data;
        setStorie(object);
      };
      fetchStorie();
    }, [id]);
  
    return storie;
  }
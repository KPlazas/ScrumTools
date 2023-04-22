import { useEffect, useState } from "react";
import axios from "axios";

export function GetUsers(id){
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        const fetchUsers= async ()=>{
            const response= await axios.get('https://localhost:7276/api/Users')//+id)
            setUsers(response.data);
        };
        fetchUsers();
    }, []);
    return users;
}
export function GetUser(id) {
    const [user, setUser]=useState([]);
  
    useEffect(() => {
      const fetchUser = async () => {
        const response = await axios.get('https://localhost:7276/api/Users/' + id);
        const object = response.data;
        setUser(object);
      };
      fetchUser();
    }, [id]);
  
    return user;
  }
import { useParams } from "react-router-dom";
import { GetProyect } from "../services/ProyectServices";


function Project(){
    const {id}= useParams();
    const project=GetProyect(id);
    return (
        <pre>{JSON.stringify(project, null, 2)}</pre>
    )
    
}
export default Project;
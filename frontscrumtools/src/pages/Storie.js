import { useParams } from "react-router-dom";
import { GetStorie } from "../services/UserStoriesServices";


function Storie(){
    const {id}= useParams();
    const storie=GetStorie(id);
    return (
        <pre>{JSON.stringify(storie, null, 2)}</pre>
    )
    
}
export default Storie;
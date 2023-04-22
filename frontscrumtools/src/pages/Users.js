import { useParams } from "react-router-dom";
import { GetUser } from "../services/UserService";


function User(){
    const {id}= useParams();
    const user=GetUser(id);
    return (
        <pre>{JSON.stringify(user, null, 2)}</pre>
    )
    
}
export default User;
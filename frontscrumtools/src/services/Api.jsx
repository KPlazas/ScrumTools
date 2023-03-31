import { Fragment, useState } from "react";
import axios from "axios";

function Api(){
    const [responseC, setResponseC] = useState(null);
    const handleSubmit = (event) => {

        event.preventDefault();
        
        axios.get('https://localhost:7276/api/Projects',
            JSON.stringify(),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('La compilación fue:', response.data);
                //const objeto = JSON.parse(response.data);
                setResponseC(response.data);
            })
            .catch(error => {
                console.error('Hubo un error:', error);
            });

    };
    return(
    <Fragment>
        <form onSubmit={handleSubmit}>
            <button type="submit">Pedir api</button>
        </form>
        <p>{responseC}</p>
    </Fragment>);
}
export default Api;
import { Fragment, useEffect, useState } from "react";
import { getAuthenticatedUser } from "../config/auth";

function Home (){
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const user = await getAuthenticatedUser();
            setUser(user);
        }
        getUser();
    }, []);
    return (<Fragment>
        {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </Fragment>);
}
export default Home;
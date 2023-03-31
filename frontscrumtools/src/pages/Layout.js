import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
return <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="/Home">ScrumTools</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/Home">Home <span class="sr-only"></span></Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Login">Log In</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/SignUp">Sign up</Link>
            </li>
          </ul>        
        </div>
      </nav>      
      <Outlet/>
</div>
}
export default Layout;
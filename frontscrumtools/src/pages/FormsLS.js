import { Link, useNavigate } from "react-router-dom";
export const SignUp =()=>{
    
    return <div>
        <div class="container-form-register">            
             <div class="container-header">
             <h2>SignUp</h2>
             </div>
             <div class="container-body">
             <form onSubmit>
                <div class="form-group">
                    <i class="fa-solid fa-user fa-lg"></i><input type="text" htmlFor="Name" placeholder="Name" required></input>
                </div>
                <div class="form-group">
                   <input type="text" htmlFor="LastName" placeholder="LastName" required></input>
                </div>
                <div className="form-group">
                    <i class="bi bi-envelope-at fa-lg"></i><input type="email" htmlFor="Email" placeholder="Email" required></input>
                </div>
                <div class="form-group">
                    <i class="fa-sharp fa-solid fa-key fa-lg"></i><input type="password" htmlFor="Password" placeholder="Password" required></input>
                </div>                
                <button type='submit'>Register</button><br></br>
                <small><Link to="/Login">Already have an account</Link></small>
            </form>
             </div>             
        </div>
    </div>
}
export const Login=()=>{
    const navigate=useNavigate();
    const ClickHandler=()=>{
        navigate('/CreateProject', {replace:true});
    }
    return <div class="container-form-login">
    <div class="container-header">
        <h2>Log In</h2>
    </div>
    <div class="container-body">
        <form onSubmit>                
            <div className="form-group">
                <i class="bi bi-envelope-at fa-lg"></i> <input type="email" htmlFor="Email" placeholder="Email" required></input>
            </div>
            <div class="form-group">
                <i class="fa-solid fa-key fa-lg" ></i> <input type="password" htmlFor="Password" placeholder="Password" required></input>
            </div>                
            <button onClick= {ClickHandler} type='submit'>Log In</button><br></br>
            <small><Link to="/SignUp">Create an account</Link></small>
        </form>
    </div>
</div>
}
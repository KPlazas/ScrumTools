import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import {SignUp, Login} from "./pages/FormsLS";
import Home from "./pages/Home";
import {CreateProject,CreateUS} from "./pages/CreateP-US";
import ViewProjects from './pages/ViewProjects';
import Project from './pages/Proyect';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='Login'element={<Login/>}></Route>
          <Route path='SignUp'element={<SignUp/>}></Route>
          <Route path='Home'element={<Home/>}></Route>
          <Route path='CreateProject'element={<CreateProject/>}></Route>
          <Route path='CreateStory'element={<CreateUS/>}></Route>
          <Route path='*' element={<Home/>}></Route>
          <Route path='ViewProjects' element={<ViewProjects/>}></Route>
          <Route path="/project/:id" element={<Project/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

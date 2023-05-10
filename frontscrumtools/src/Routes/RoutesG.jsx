import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../auth/Register';
import { CreateUS } from '../pages/CreateP-US';
import ViewProjects from '../pages/ViewProjects';
import Project from '../pages/Proyect';
import Storie from '../pages/Storie';
import Callback from '../auth/Callback';
import Logout from '../auth/Logout';
import NewProject from '../pages/NewProject';

function RoutesG() {
  return (
    <Fragment>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<Home />} />
          <Route path="/SignUp" element={<Register />} />
          <Route path="/CreateStory" element={<CreateUS />} />
          <Route path="/ViewProjects" element={<ViewProjects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/storie/:id" element={<Storie />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
    </Fragment>

  );
}

export default RoutesG;
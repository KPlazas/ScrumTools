import { useParams } from "react-router-dom";
import { GetStories } from "../services/UserStoriesServices";
import { GetProyect } from "../services/ProyectServices";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Project(){
    const {id}= useParams();
    const project=GetProyect(id);
    const stories = GetStories();    
    return (   
        <Fragment>
        {stories.map(stories => (
        <div className="card" key={stories.id}>
          <div className="card-body">
            <h5 className="card-title">{stories.storyId}</h5>                                                 
            <p className="card-text">{stories.storyName}</p>   
            <p className="card-text">{stories.storyDescription}</p>              
            <p className="card-text">Epica: {stories.storyEpic}</p>               
          </div>
        </div>
        
      ))}    
        <pre>{JSON.stringify(project, null, 2)}</pre>
        </Fragment>
    )
    
}
export default Project;
import { Fragment } from "react";
import { GetStories } from "../services/UserStoriesServices";
import { Link } from "react-router-dom";
function ViewStories() {
  const stories = GetStories();
  return (
    <Fragment>
   <div className="container-fluid w-75">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre de HU</th>
            <th>Descripcion HU</th>
            <th>Dificultad HU</th>
            <th>Proyecto al que pertenece</th>
          </tr>
        </thead>
        <tbody>
          {stories.map((item) => (
            <tr key={item.id}>
              <td>{item.storyName}</td>
              <td>{item.storyDescription}</td>
              <td>{item.storyDifficulty}</td>
              <td>{item.fk_Project}</td>
              <td><Link to={"/storie/"+item.storyId}>HU_  {item.storyId}</Link></td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Fragment>
  );
}
export default ViewStories;
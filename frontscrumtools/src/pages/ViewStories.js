import { Fragment } from "react";
import { GetStories } from "../services/UserStoriesServices";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ViewStories() {
  const stories = GetStories();
  const [t, i18n] = useTranslation("global");
  return (
    <Fragment>
   <div className="container-fluid w-75">
      <table className="table">
        <thead>
          <tr>
            <th>{t("creation.userStory.Name-HU")}</th>
            <th>{t("creation.userStory.describe")}</th>
            <th>{t("creation.userStory.Difficulty-HU")}</th>
            <th>{t("creation.userStory.Project")}</th>
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
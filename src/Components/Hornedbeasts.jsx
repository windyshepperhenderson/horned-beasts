import { useState } from "react";
import SelectedBeast from "./SelectedBeast";

export default function Hornedbeasts({ title, image_url, description, horns }) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  const imageHeight = "250px";
  return (
    <div className="hornedBeasts">
      <h2>{title}</h2>
      <img src={image_url} height={imageHeight} />
      <p>{description}</p>
      <p>HORNS = {horns}</p>
      <p className="heart" onClick={handleLikes}>
        {" "}
        ❤️{" "}
      </p>
      <p>LOVED BY = {likes} USERS</p>
      <SelectedBeast img={image_url} description={description} />
    </div>
  );
}

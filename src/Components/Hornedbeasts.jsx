import { useState } from "react";

export default function Hornedbeasts({ title, image_url, description, horns }) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  const imageHeight = "250px";
  return (
    <div className="hornedBeasts">
      <h2>{title}</h2>
      <img src={image_url} onClick={handleLikes} height={imageHeight} />
      <p>{description}</p>
      <p>HORNS = {horns}</p>
      <p>LOVED BY = {likes} USERS</p>
    </div>
  );
}

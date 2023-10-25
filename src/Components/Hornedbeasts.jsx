import { useState } from "react";
import SelectedBeast from "./SelectedBeast";

export default function Hornedbeasts({ title, image_url, description, horns }) {
  const [likes, setLikes] = useState(0);
  const [scared, setScared] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const imageHeight = "250px";

  function handleShowModal() {
    setShowModal(!showModal);
  }

  function handleLikes() {
    setLikes(likes + 1);
  }

  function handleScared() {
    setScared(scared + 1);
  }

  return (
    <div className="hornedBeasts">
      <h2>{title}</h2>
      <p>HORNS = {horns}</p>
      <img src={image_url} height={imageHeight} onClick={handleShowModal} />

      {/* <p>{description}</p> */}

      <p className="heart" onClick={handleLikes}>
        {" "}
        ❤️{" "}
      </p>
      <p>LOVED BY = {likes} USERS</p>
      <p className="scared" onClick={handleScared}>
        😱
      </p>
      <p>SCARED BY = {scared} USERS</p>

      {showModal && (
        <SelectedBeast
          image_url={image_url}
          description={description}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}

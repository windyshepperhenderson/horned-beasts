export default function SelectedBeast({
  handleShowModal,
  image_url,
  description,
}) {
  return (
    <div className="SelectedBeast">
      <div className="imagePopUp">
        <img height="imageHeight" onClick={handleShowModal} src={image_url} />
        <p>{description}</p>
        <button className="close-button" onClick={handleShowModal}>
          X
        </button>
      </div>
    </div>
  );
}

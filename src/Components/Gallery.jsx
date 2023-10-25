import Hornedbeasts from "./Hornedbeasts";

export default function Gallery(props) {
  return (
    <div className="gallery">
      {props.beastList.map((beast) => {
        return (
          <Hornedbeasts
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
            horns={beast.horns}
          />
        );
      })}
    </div>
  );
}

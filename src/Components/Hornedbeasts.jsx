export default function Hornedbeasts({ title, imageUrl, description }) {
  const imageHeight = "250px";
  return (
    <div className="hornedBeasts">
      <h2>{title}</h2>
      <img src={imageUrl} height={imageHeight} />
      <p>{description}</p>
    </div>
  );
}

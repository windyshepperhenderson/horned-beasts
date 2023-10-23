import Hornedbeasts from "./Hornedbeasts";

export default function Gallery() {
  return (
    <div className="gallery">
      <Hornedbeasts
        title="Unicorn"
        imageUrl="https://ychef.files.bbci.co.uk/976x549/p075vvzf.jpg"
        description="Scotland's national animal"
      />
      <Hornedbeasts
        title="Satan"
        imageUrl="https://c.files.bbci.co.uk/5DFC/production/_84606042_satan-promo.jpg"
        description="The Devil himself"
      />
      <Hornedbeasts
        title="Hedgehog"
        imageUrl="https://www.worldlandtrust.org/wp-content/uploads/2017/07/shutterstock_118149634.jpg"
        description="A hedgehog, often called the many horned dragon"
      />
    </div>
  );
}

import "../../App.css";

function Image({ image }) {
  return (
    <span className="image-span">
      <img
        className="image"
        width="500"
        height="auto"
        alt="cocktail"
        src={image}
      ></img>
    </span>
  );
}

export default Image;

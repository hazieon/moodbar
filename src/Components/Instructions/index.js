import "../../App.css";

function Instructions({ instructions }) {
  return (
    <div className="instructions-wrap">
      <p className="instructions">{instructions}</p>
    </div>
  );
}

export default Instructions;

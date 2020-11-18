import "./button.css";

function MoodBarButtons({ handleClick }) {
  return (
    <container id="container">
      <h1 className="header">Cocktail or Mocktail</h1>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {/* Post Bootcamp
      </button>
      <button
        onClick={() => {
          handleClick();
        }}
      > */}
        {/* Post Recap Quiz
      </button>
      <button
        onClick={() => {
          handleClick();
        }}
      > */}
        Election Results
      </button>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        TGIF
      </button>
      {/* <button
        onClick={() => {
          handleClick();
        }}
      >
        Midweek Mocktail
      </button> */}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        fml
      </button>
    </container>
  );
}

export default MoodBarButtons;

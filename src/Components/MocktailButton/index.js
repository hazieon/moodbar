import "../MoodBarButton/button.css";

function MocktailButton({ handleClick }) {
  return (
    <container id="mock-container">
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Midweek Mocktail
      </button>
    </container>
  );
}

export default MocktailButton;

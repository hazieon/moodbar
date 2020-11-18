function Alcoholic({ alcoholic }) {
  function calcAlc() {
    let randomNum = Math.floor(Math.random() * 100 + 1);
    console.log(randomNum);
    return randomNum;
  }
  calcAlc();

  let percentage = calcAlc() + "%";

  if (alcoholic === "Alcoholic") {
    return (
      <h3> {percentage} Alcohol</h3>
      // <img
      //   width="150"
      //   height="150"
      //   alt="cocktail"
      //   src="https://previews.123rf.com/images/mihmihmal/mihmihmal1802/mihmihmal180200075/95963108-alcoholic-cocktails-black-signage-with-3-colorful-refreshing-mocktails-and-original-brush-typeface-f.jpg"
      // ></img>
    );
  } else
    return (
      <h1>0% Alcohol!</h1>
      // <img
      //   width="150"
      //   height="150"
      //   alt="mocktail"
      //   src="https://previews.123rf.com/images/mihmihmal/mihmihmal1903/mihmihmal190300083/120422025-vector-logo-for-mocktails-black-tag-with-3-non-alcoholic-drinks-original-lettering-for-word-mocktail.jpg"
      // ></img>
    );
}

export default Alcoholic;

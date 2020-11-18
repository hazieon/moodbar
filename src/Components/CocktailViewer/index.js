import Name from "../Name/index";
import Alcoholic from "../Alcoholic/index";
import Instructions from "../Instructions/index";
import Glass from "../Glass/index";
import Image from "../Image/index";
import Ingredients from "../Ingredients";

function CocktailViewer({ cocktail }) {
  console.log(cocktail);
  if (cocktail) {
    return (
      <div>
        <Image image={cocktail.image} />
        <Name className="name" name={cocktail.name} />
        <Alcoholic alcoholic={cocktail.alcoholic} />
        <Instructions instructions={cocktail.instructions} />
        <Glass glass={cocktail.glass} />
        <Ingredients ingredients={cocktail.ingredients} />
      </div>
    );
  } else return null;
}

export default CocktailViewer;

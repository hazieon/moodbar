import "./App.css";
import React, { useState, useEffect } from "react";

import CocktailViewer from "./Components/CocktailViewer";
import MoodBarButton from "./Components/MoodBarButton";
import MocktailButton from "./Components/MocktailButton";

function App() {
  const [cocktail, setCocktail] = useState();

  function makeCocktailObject(data) {
    const ingredientsArr = [];
    for (let i = 0; i < 15; i++) {
      if (data.drinks[0][`strIngredient${i + 1}`] === null) {
        break;
      }
      let ingredient = data.drinks[0][`strIngredient${i + 1}`];
      let measure = data.drinks[0][`strMeasure${i + 1}`];
      ingredientsArr[i] = { ingredient: ingredient, measure: measure };
    }

    const cocktailObject = {
      name: data.drinks[0].strDrink,
      alcoholic: data.drinks[0].strAlcoholic,
      glass: data.drinks[0].strGlass,
      instructions: data.drinks[0].strInstructions,
      image: data.drinks[0].strDrinkThumb,
      ingredients: ingredientsArr,
    };
    return cocktailObject;
  }

  function makeMocktailObject(data) {
    // const ingredientsArr = [];
    let randomNum = Math.floor(Math.random() * data.drinks.length + 1);
    let ind = randomNum;

    // for (let i = 0; i < 15; i++) {
    //   if (data.drinks[ind][`strIngredient${i + 1}`] === null) {
    //     break;
    //   }
    //   let ingredient = data.drinks[ind][`strIngredient${i + 1}`];
    //   let measure = data.drinks[ind][`strMeasure${i + 1}`];
    //   ingredientsArr[i] = { ingredient: ingredient, measure: measure };
    // }

    const mocktailObject = {
      name: data.drinks[ind].strDrink,
      alcoholic: data.drinks[ind].strAlcoholic,
      glass: data.drinks[ind].strGlass,
      instructions: data.drinks[ind].strInstructions,
      image: data.drinks[ind].strDrinkThumb,
      ingredients: [{ ingredient: "improvisation", measure: "a little" }],
    };

    return mocktailObject;
  }

  async function getApiDrink() {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    const cocktailObject = makeCocktailObject(data);

    setCocktail(cocktailObject);
    // console.log(cocktail);
  }

  async function getMockDrink() {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    );
    const data = await res.json();
    const mocktailObject = makeMocktailObject(data);
    setCocktail(mocktailObject);
    console.log(data);
  }

  useEffect(() => {
    getMockDrink();
  }, []);

  useEffect(() => {
    getApiDrink();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MoodBarButton handleClick={getApiDrink} />
        <MocktailButton handleClick={getMockDrink} />
        <CocktailViewer cocktail={cocktail} />
      </header>
    </div>
  );
}

export default App;

//const [button, setButton] = useState(false);

//<Button handleClick={getCocktail} />
//<CocktailViewer cocktail={cocktail} />

// function getCocktail() {
//   setButton(!button);
// }

// useEffect(() => {
//   async function getApiDrink() {
//     const res = await fetch(
//       "https://www.thecocktaildb.com/api/json/v1/1/random.php"
//     );
//     const data = await res.json();
//     console.log(data);
//     setApiDrink(data);
//   }
//   getApiDrink();
// }, [button]);

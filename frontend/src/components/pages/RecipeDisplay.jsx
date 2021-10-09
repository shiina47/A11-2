/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./Recipe";

export const RecipeDisplay = memo(() => {
  const [recipes, setRecipes] = useState([]);
  const [display, setDisplay] = useState({});
  const [id, setId] = useState(0);
  const handleRecipe = () => {
    setId(prev => prev + 1);
  };

  useEffect(() => {
    console.log('ステートが更新された。');
    console.log(id);
    setDisplay(recipes[id]);
    console.log(display);
  }, [id])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipe")
      .then((res) => {
        setRecipes(res.data);
        console.log(res.data[0].material);
        setDisplay(res.data[0]);
      })
  }, []);

  return (
    <>
      {display
        ? <Recipe
            title={display.title}
            cost={display.cost}
            amount={display.amount}
            minutes={display.minutes}
            image={display.image}
            material={display.material}
            process={display.process}
            onClick={handleRecipe}
            key={display.title}
          />
        : 'test'
      }
      {/* {recipes.map((recipe) => (
        <Recipe
          title={recipe.title}
          cost={recipe.cost}
          amount={recipe.amount}
          minutes={recipe.minutes}
          image={recipe.image}
          material={recipe.material}
          process={recipe.process}
          onClick={handleRecipe}
          key={recipe.title}
        />
      ))} */}
    </>
  );
});

import { memo, useState, useEffect } from "react";
import axios from "axios";
import Recipe from "../Recipe";

export const RecipeDisplay = memo(() => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipe")
      .then((res) => {
        setRecipes(res.data);
      })
  }, []);

  return (
    <>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.title}
          cost={recipe.cost}
          amount={recipe.amount}
          minutes={recipe.minutes}
          image={recipe.image}
          material={recipe.material}
          process={recipe.process}
          key={recipe.title}
        />
      ))}
    </>
  );
});

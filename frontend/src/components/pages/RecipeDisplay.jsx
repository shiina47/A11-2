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
    setDisplay(recipes[id]);
  }, [id])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipe", {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        setRecipes(res.data);
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
        : 'ここにレシピが表示されます。'
      }
    </>
  );
});

/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./Recipe";

export const RecipeDisplay = memo(() => {
  const [recipes, setRecipes] = useState([]);
  const [display, setDisplay] = useState({});
  const [id, setId] = useState(0);
  const [logInId, setLogInId] = useState(0);

  const likeRecipe = (recipeId, liked, isDisplayed) => {
    setId((prev) => prev + 1);
    // console.log(recipeId);
    // console.log(liked);

    if (!liked.includes(logInId) && !isDisplayed.includes(logInId)) {
      liked.push(logInId);
      isDisplayed.push(logInId);
      const likedData = {
        liked: liked,
        isDisplayed: isDisplayed,
      };
      console.log(likedData);
      axios.patch(`http://127.0.0.1:8000/api/recipe/${recipeId}/`, likedData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      });
    }
    // console.log(liked);
  };

  const dislikeRecipe = (recipeId, isDisplayed) => {
    setId((prev) => prev + 1);

    if (!isDisplayed.includes(logInId)) {
      isDisplayed.push(logInId);
      const dislikedData = {
        isDisplayed: isDisplayed,
      };
      axios.patch(`http://127.0.0.1:8000/api/recipe/${recipeId}/`, dislikedData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      });
    };
  };

  useEffect(() => {
    setDisplay(recipes[id]);
  }, [id]);

  useEffect(() => {
    const getAllRecipe = async () => {
      const resRecipes = await axios.get("http://127.0.0.1:8000/api/recipe/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      });

      const allRecipes = await resRecipes.data;

      const resMyId = await axios.get("http://127.0.0.1:8000/api/myself", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      });

      const myId = await resMyId.data.id;

      const isNotDisplayedRecipes = await allRecipes.filter((recipe) => {
        return !recipe.isDisplayed.includes(myId);
      });

      setRecipes(isNotDisplayedRecipes);
      setDisplay(isNotDisplayedRecipes[0]);
      setLogInId(myId);
    };

    getAllRecipe();
  }, []);

  return (
    <>
      {display ? (
        <Recipe
          recipeId={display.id}
          title={display.title}
          cost={display.cost}
          amount={display.amount}
          minutes={display.minutes}
          image={display.image}
          material={display.material}
          process={display.process}
          userId={display.user}
          liked={display.liked}
          isDisplayed={display.isDisplayed}
          onClickLike={likeRecipe}
          onClickDislike={dislikeRecipe}
          key={display.title}
        />
      ) : null}
    </>
  );
});

/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./Recipe";

export const RecipeDisplay = memo(() => {
  const [recipes, setRecipes] = useState([]);
  const [display, setDisplay] = useState({});
  const [id, setId] = useState(0);
  const [logInId, setLogInId] = useState(0);

  const likeRecipe = (recipeId, liked) => {
    setId((prev) => prev + 1);
    // console.log(recipeId);
    // console.log(liked);

    if (!liked.includes(logInId)) {
      liked.push(logInId);
      const likedData = {
        liked: liked,
        isDisplayed: true,
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

  const dislikeRecipe = (recipeId) => {
    setId((prev) => prev + 1);
    const dislikedData = {
      isDisplayed: true,
    };
    axios.patch(`http://127.0.0.1:8000/api/recipe/${recipeId}/`, dislikedData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
  };

  useEffect(() => {
    setDisplay(recipes[id]);
  }, [id]);

  useEffect(() => {
    const getAllRecipe = async () => {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/recipe/?isDisplayed=false",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.localJWT}`,
          },
        }
      );

      console.log(res.data);
      // res.data.process = await res.data.process.sort(compare);

      setRecipes(res.data);
      setDisplay(res.data[0]);

      const myId = await axios.get("http://127.0.0.1:8000/api/myself", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      });

      setLogInId(myId.data.id);
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
          onClickLike={likeRecipe}
          onClickDislike={dislikeRecipe}
          key={display.title}
        />
      ) : null}
    </>
  );
});

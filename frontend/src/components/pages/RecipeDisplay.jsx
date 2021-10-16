/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import TinderCard from "react-tinder-card";

export const RecipeDisplay = memo(() => {
  const [recipes, setRecipes] = useState([]);
  const [display, setDisplay] = useState({});
  const [id, setId] = useState(0);
  const [logInId, setLogInId] = useState(0);

  const handleRecipe = (recipeId, liked) => {
    setId(prev => prev + 1);
    // console.log(recipeId);
    // console.log(liked);

    if (!liked.includes(logInId)) {
      liked.push(logInId);
      const likedData = {
        liked: liked
      };
      axios
      .patch(`http://127.0.0.1:8000/api/recipe/${recipeId}/`, likedData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
      },
      });
    };
    // console.log(liked);
  };

  useEffect(() => {
    setDisplay(recipes[id]);
  }, [id])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipe", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        setRecipes(res.data);
        setDisplay(res.data[0]);
        // console.log(res.data[0]);
      })
    axios
      .get("http://127.0.0.1:8000/api/myself", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        setLogInId(res.data.id);
      })
  }, []);

  const onSwipe = (direction) => {
        if (direction === "left"){
            console.log('BAD!!')
        }
        if (direction === "right"){
            console.log('LIKE!!')
        }
    }

  return (
    <TinderCard onSwipe={onSwipe} preventSwipe={['up', 'down']}>
      {display
        ? <Recipe
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
            onClick={handleRecipe}
            key={display.title}
          />
        : null
      }
    </TinderCard>
  );
});

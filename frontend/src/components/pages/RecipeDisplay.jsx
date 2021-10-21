/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState, useEffect, useCallback } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import { Box } from "@mui/material";

import "../../css/RecipeDisplay.css";
import { RecipeInfo } from "../MyPage/RecipeInfo";
import { Material } from "../RecipeDeital/Material";
import { ProcesseHome } from "../RecipeDeital/ProcessHome";

export const RecipeDisplay = memo(() => {
  console.log("display");
  const [recipes, setRecipes] = useState([]);

  // recipe 詳細情報取得用
  const [nowRecipe, setNowRecipe] = useState(undefined);
  const [count, setCount] = useState(1);
  const [isDetail, setIsDetail] = useState(false);

  const likeRecipe = useCallback(async (recipe) => {
    const resMyId = await axios.get("http://127.0.0.1:8000/api/myself", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    const myId = await resMyId.data.id;

    if (!recipe.liked.includes(myId) && !recipe.isDisplayed.includes(myId)) {
      await recipe.liked.push(myId);
      await recipe.isDisplayed.push(myId);

      const likedData = {
        liked: recipe.liked,
        isDisplayed: recipe.isDisplayed,
      };

      axios.patch(`http://127.0.0.1:8000/api/recipe/${recipe.id}/`, likedData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      });
    }
  }, []);

  const dislikeRecipe = useCallback(async (recipeId, isDisplayed) => {
    const resMyId = await axios.get("http://127.0.0.1:8000/api/myself", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    const myId = await resMyId.data.id;
    if (!isDisplayed.includes(myId)) {
      isDisplayed.push(myId);
      const dislikedData = {
        isDisplayed: isDisplayed,
      };
      axios.patch(
        `http://127.0.0.1:8000/api/recipe/${recipeId}/`,
        dislikedData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.localJWT}`,
          },
        }
      );
    }
  }, []);

  // liked と isDisplayedの初期化
  // error でるけど何回か押してたら初期化される
  const Reset = async () => {
    const resRecipes = await axios.get("http://127.0.0.1:8000/api/recipe/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });

    const allRecipes = await resRecipes.data;
    const likedData = {
      liked: [],
      isDisplayed: [],
    };
    for (let i = 0; i < allRecipes.length; i++) {
      const id = allRecipes[i].id;
      if (allRecipes[i].liked !== [] || allRecipes[i].isDisplayed !== []) {
        axios.patch(`http://127.0.0.1:8000/api/recipe/${id}/`, likedData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.localJWT}`,
          },
        });
      }
    }
  };

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
    };

    getAllRecipe();
  }, []);

  // swipe
  const swiped = useCallback((direction, recipe) => {
    if (direction === "right") {
      console.log(direction);
      likeRecipe(recipe);
    } else if (direction === "left") {
      console.log(direction);
      dislikeRecipe(recipe.id, recipe.isDisplayed);
    }
    setCount((pre) => pre + 1);
    setIsDetail(false);
  }, []);

  return (
    <>
      <button onClick={() => Reset()}>reset</button>

      <SRootDiv>
        <SAppDiv>
          <SCardContainer>
            {recipes.map((recipe) => {
              return (
                <TinderCard
                  className="swipe"
                  preventSwipe={["up", "down"]}
                  onSwipe={(dir) => swiped(dir, recipe)}
                  key={recipe.id}
                >
                  <SCard>
                    <SCardContent>
                      <Box
                        height="300px"
                        width="300px"
                        boxShadow={4}
                        borderRadius={3}
                        marginTop="10px"
                      >
                        <SImg src={recipe.image} alt="image" />
                      </Box>

                      <h3>{recipe.title}</h3>
                      <RecipeInfo
                        likes_count={recipe.likes_count}
                        minutes={recipe.minutes}
                        cost={recipe.cost}
                      />
                    </SCardContent>
                  </SCard>
                </TinderCard>
              );
            })}
          </SCardContainer>
        </SAppDiv>
      </SRootDiv>
      <SDetailDiv>
        <SBtn
          onClick={() => {
            setNowRecipe(recipes[recipes.length - count]);
            setIsDetail(!isDetail);
          }}
        >
          {isDetail ? "閉じる" : "詳細を見る"}
        </SBtn>
        {isDetail ? (
          <SDetailContents>
            <Material materials={nowRecipe && nowRecipe.material} />
            <ProcesseHome processes={nowRecipe && nowRecipe.process} />
          </SDetailContents>
        ) : null}
      </SDetailDiv>
    </>
  );
});

const SRootDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 450px;
  overflow: hidden;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SImg = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const SCardContainer = styled.div`
  width: 90vw;
  height: 95vh;
  display: flex;
  justify-content: center;
`;

const SCard = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 15px 0px rgba(34, 34, 34, 0.3);
  min-width: 320px;
  height: 400px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  padding: 5px;
`;

const SCardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SDetailDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SBtn = styled.button`
  border-radius: 10px;
  border: none;
  width: 200px;
  height: 40px;
  background-color: #ff9800;
  padding: 10px;
  color: #ffffff;
  font-size: large;
  font-weight: 800;
  margin: 0 auto;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const SDetailContents = styled.div`
  width: 320px;
  margin: 0 auto;
  min-width: 320px;
  border-radius: 20px;
  background-color: white;
  margin-bottom: 50px;
`;

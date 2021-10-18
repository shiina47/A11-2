/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import styled from "styled-components";

import { useRecipe } from "../../hooks/useRecipe";
import { TitleDiv } from "../atoms/TitleDiv";
import { RecipeInfo } from "../MyPage/RecipeInfo";

export const MyPage = memo(() => {
  const { getMyRecipes, myRecipes, getMyLikedRecipes, myLikedRecipes } =
    useRecipe();

  const history = useHistory();

  useEffect(() => {
    getMyRecipes();
    getMyLikedRecipes();
  }, []);

  return (
    <Box width="90%" mx="auto">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <TitleDiv>投稿したレシピ</TitleDiv>

        <Box width="370px">
          {myRecipes.map((myRecipe) => {
            return (
              <SListBox
                key={myRecipe.id}
                onClick={() =>
                  history.push({
                    pathname: "/detail",
                    state: { id: myRecipe.id },
                  })
                }
              >
                <SImg src={myRecipe && myRecipe.image} alt="料理" />
                <SRecipeBox>
                  <Typography variant="body1" fontWeight="bold" marginTop="5px">
                    {myRecipe.title}
                  </Typography>
                  <RecipeInfo
                    likes_count={myRecipe.likes_count}
                    minutes={myRecipe.minutes}
                    cost={myRecipe.cost}
                  />
                </SRecipeBox>
              </SListBox>
            );
          })}
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <TitleDiv>お気に入りのレシピ</TitleDiv>

        <Box width="370px">
          {myLikedRecipes.map((myLikedRecipe) => {
            return (
              <SListBox
                key={myLikedRecipe.id}
                onClick={() =>
                  history.push({
                    pathname: "/detail",
                    state: { id: myLikedRecipe.id },
                  })
                }
              >
                <SImg src={myLikedRecipe && myLikedRecipe.image} alt="料理" />
                <SRecipeBox>
                  <Typography variant="body1" fontWeight="bold" marginTop="5px">
                    {myLikedRecipe.title}
                  </Typography>
                  <RecipeInfo
                    likes_count={myLikedRecipe.likes_count}
                    minutes={myLikedRecipe.minutes}
                    cost={myLikedRecipe.cost}
                  />
                </SRecipeBox>
              </SListBox>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
});

const SRecipeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const SListBox = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: #ffffffef;
  cursor: pointer;
  display: flex;
  margin: 10px;
`;

const SImg = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin: 2px;
`;

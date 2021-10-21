/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";

import styled from "styled-components";

import { useRecipe } from "../../hooks/useRecipe";
import { TitleDiv } from "../atoms/TitleDiv";
import { RecipeInfo } from "../MyPage/RecipeInfo";

export const MyPage = memo(() => {
  const {
    getMyRecipes,
    myRecipes,
    getMyLikedRecipes,
    myLikedRecipes,
    loading,
  } = useRecipe();

  const history = useHistory();

  useEffect(() => {
    const myPageRecipes = async () => {
      await getMyRecipes();
      await getMyLikedRecipes();
    };
    myPageRecipes();
  }, []);

  return (
    <>
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Box width="90%" mx="auto">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="370px">
              <TitleDiv>投稿したレシピ</TitleDiv>
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
                    <Box height="100px">
                      <SImg src={myRecipe && myRecipe.image} alt="料理" />
                    </Box>

                    <SRecipeBox>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        marginTop="5px"
                      >
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
            <Box width="370px">
              <TitleDiv>お気に入りのレシピ</TitleDiv>
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
                    <Box height="100px">
                      <SImg
                        src={myLikedRecipe && myLikedRecipe.image}
                        alt="料理"
                      />
                    </Box>
                    <SRecipeBox>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        marginTop="5px"
                      >
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
      )}
    </>
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
  box-shadow: 5px 10px 15px -5px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.15);
`;

const SImg = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

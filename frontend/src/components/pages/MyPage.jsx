/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import styled from "styled-components";

import { useRecipe } from "../../hooks/useRecipe";

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
        <STitleDiv>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
            textAlign="center"
            mt={1}
          >
            投稿したレシピ
          </Typography>
        </STitleDiv>

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
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  marginLeft="10px"
                  marginTop="5px"
                >
                  {myRecipe.title}
                </Typography>
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
        <STitleDiv>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
            textAlign="center"
            mt={1}
          >
            お気に入りのレシピ
          </Typography>
        </STitleDiv>

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
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  marginLeft="10px"
                  marginTop="5px"
                >
                  {myLikedRecipe.title}
                </Typography>
              </SListBox>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
});

const STitleDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 40px;
  margin-top: 10px;
  background-color: rgba(250, 178, 35, 0.9);
  border-radius: 10px;
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

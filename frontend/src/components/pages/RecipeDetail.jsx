/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { useRecipe } from "../../hooks/useRecipe";
import { CookMunites } from "../RecipeDeital/CookMunites";
import { CookCost } from "../RecipeDeital/CookCost";
import { Material } from "../RecipeDeital/Material";
import { Processes } from "../RecipeDeital/Processes";
import { PrimaryBtn } from "../atoms/PrimaryBtn";

export const RecipeDetail = memo(() => {
  const location = useLocation();
  const recipeId = location.state.id;
  const history = useHistory();

  const { getSelectedRecipe, selectedRecipe } = useRecipe();

  const onClickBackMyPage = () => {
    history.push("/mypage");
  };

  useEffect(() => {
    getSelectedRecipe(recipeId);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "370px",
        marginX: "auto",
        marginBottom: "50px",
      }}
    >
      <SRecipeTitle>
        <Typography fontWeight="bold" p={1} color="white" variant="h5">
          {selectedRecipe && selectedRecipe.title}
        </Typography>
      </SRecipeTitle>

      <Box boxShadow={3} borderRadius={3} height="400px" width="360px">
        <SImg src={selectedRecipe && selectedRecipe.image} alt="料理" />
      </Box>

      <Box
        width="100%"
        marginTop="10px"
        display="flex"
        justifyContent="space-between"
      >
        <CookMunites minutes={selectedRecipe && selectedRecipe.minutes} />
        <CookCost cost={selectedRecipe && selectedRecipe.cost} />
      </Box>
      <Material materials={selectedRecipe && selectedRecipe.material} />
      <Processes processes={selectedRecipe && selectedRecipe.process} />
      <Box marginTop="30px">
        <PrimaryBtn onClick={onClickBackMyPage}>戻る</PrimaryBtn>
      </Box>
    </Box>
  );
});

const SRecipeTitle = styled.div`
  margin: 15px 0;
  width: 370px;
  height: 40px;
  background-color: #ff9800;
  border-radius: 10px;
`;

const SImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

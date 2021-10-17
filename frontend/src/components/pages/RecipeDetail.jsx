/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { useRecipe } from "../../hooks/useRecipe";
import { CookMunites } from "../RecipeDeital/CookMunites";
import { CookCost } from "../RecipeDeital/CookCost";
import { Material } from "../RecipeDeital/Material";
import { Processes } from "../RecipeDeital/Processes";

export const RecipeDetail = memo(() => {
  const location = useLocation();
  const recipeId = location.state.id;

  const { getSelectedRecipe, selectedRecipe } = useRecipe();

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
      <Typography alignSelf="start" m={2} fontWeight="bold" variant="h5">
        {selectedRecipe && selectedRecipe.title}
      </Typography>
      <Box>
        <img
          src={selectedRecipe && selectedRecipe.image}
          height="400px"
          width="360px"
          alt="料理"
        />
      </Box>

      <Box
        width="100%"
        marginTop="5px"
        display="flex"
        justifyContent="space-between"
      >
        <CookMunites minutes={selectedRecipe && selectedRecipe.minutes} />
        <CookCost cost={selectedRecipe && selectedRecipe.cost} />
      </Box>
      <Material materials={selectedRecipe && selectedRecipe.material} />
      <Processes processes={selectedRecipe && selectedRecipe.process} />
    </Box>
  );
});

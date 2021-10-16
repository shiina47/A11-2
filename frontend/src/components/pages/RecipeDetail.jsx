/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import { useRecipe } from "../../hooks/useRecipe";

export const RecipeDetail = memo(() => {
  const location = useLocation();
  const recipeId = location.state.id;

  const { getSelectedRecipe, selectedRecipe } = useRecipe();

  useEffect(() => {
    getSelectedRecipe(recipeId);
  }, []);

  return <Box></Box>;
});

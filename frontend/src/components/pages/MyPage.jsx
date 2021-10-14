/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { useRecipe } from "../../hooks/useRecipe";

export const MyPage = memo(() => {
  const { getMyRecipes, myRecipes } = useRecipe();

  useEffect(() => {
    getMyRecipes();
  }, []);

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          投稿したレシピ
        </Typography>
        <div>
          {myRecipes.map((myRecipe) => {
            return (
              <div key={myRecipe.id}>
                <p>{myRecipe.title}</p>
              </div>
            );
          })}
        </div>
      </Box>
    </Box>
  );
});

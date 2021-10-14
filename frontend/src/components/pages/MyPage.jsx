/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

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
        <List>
          {myRecipes.map((myRecipe) => {
            return (
              <ListItem key={myRecipe.id} button>
                <ListItemText primary={myRecipe.title} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
});

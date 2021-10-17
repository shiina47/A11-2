/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

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
        <Box
          sx={{ borderBottom: 2 }}
          display="flex"
          justifyContent="center"
          width="350px"
        >
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            borderBottom="1"
            fontWeight="bold"
          >
            投稿したレシピ
          </Typography>
        </Box>

        <List>
          {myRecipes.map((myRecipe) => {
            return (
              <ListItem key={myRecipe.id} button>
                <ListItemText
                  primary={myRecipe.title}
                  onClick={() =>
                    history.push({
                      pathname: "/detail",
                      state: { id: myRecipe.id },
                    })
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{ borderBottom: 2 }}
          display="flex"
          justifyContent="center"
          width="350px"
        >
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            borderBottom="1"
            fontWeight="bold"
          >
            お気に入りのレシピ
          </Typography>
        </Box>

        <List>
          {myLikedRecipes.map((myLikedRecipe) => {
            return (
              <ListItem key={myLikedRecipe.id} button>
                <ListItemText
                  primary={myLikedRecipe.title}
                  onClick={() =>
                    history.push({
                      pathname: "/detail",
                      state: { id: myLikedRecipe.id },
                    })
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
});

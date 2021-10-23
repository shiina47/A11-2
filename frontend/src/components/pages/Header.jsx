import { memo } from "react";
import { useHistory } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { grey } from "@mui/material/colors";

import styled from "styled-components";

export const Header = memo(() => {
  const history = useHistory();

  const toPost = () => {
    history.push("/post");
  };
  const toRecipes = () => {
    history.push("/recipes");
  };
  const toMyPage = () => {
    history.push("/mypage");
  };
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
  };

  return (
    <Box>
      <SHeader>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h6"
            alignSelf="center"
            marginLeft="20px"
            fontWeight="bold"
            color="white"
          >
            Reciper
          </Typography>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ color: grey[50] }} />
          </IconButton>
        </Box>
      </SHeader>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem>
            <Button
              onClick={toPost}
              sx={{ color: grey[900], fontWeight: "bold" }}
            >
              レシピを投稿する
            </Button>
          </ListItem>
          <ListItem>
            <Button
              onClick={toRecipes}
              sx={{ color: grey[900], fontWeight: "bold" }}
            >
              レシピを見つける
            </Button>
          </ListItem>
          <ListItem>
            <Button
              onClick={toMyPage}
              sx={{ color: grey[900], fontWeight: "bold" }}
            >
              マイページ
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
});

const SHeader = styled.div`
  background-color: #ff9800;
`;

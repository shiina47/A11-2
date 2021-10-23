import { memo } from "react";
import { useHistory } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export const Header = memo(() => {
  const history = useHistory();
  const toLogIn = () => {
    history.push("/auth");
  };
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            Reciper
          </Typography>
          <Button color="inherit" onClick={toLogIn}>
            ログイン
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem>
            <Button onClick={toPost}>レシピを投稿する</Button>
          </ListItem>
          <ListItem>
            <Button onClick={toRecipes}>レシピを見つける</Button>
          </ListItem>
          <ListItem>
            <Button onClick={toMyPage}>マイページ</Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
});

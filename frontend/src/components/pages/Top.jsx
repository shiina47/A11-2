import { memo } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useAuth } from "../../hooks/useAuth";
import img from "../photo-1482049016688-2d3e1b311543.jpeg";

export const Top = memo(() => {
  const history = useHistory();
  const toPost = () => {
    history.push("/post");
  };
  const toRecipes = () => {
    history.push("/recipes");
  };

  const { getUserId } = useAuth();

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" , backgroundImage: `url(${img})` , backgroundSize:"cover" , height:"calc(100vh - 64px)"}}>
        <Box
          sx={{
            width: "300px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              margin: "40px 0 136px 0"
            }}
          >
            <h1 style={{ color: "white", fontSize: "48px" }}>Reciper</h1>
            <p style={{ color: "white", letterSpacing: "4px" }}>
              早いレシピを
              <br />
              早く見つける
            </p>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <Button
              variant="contained"
              sx={{ marginBottom: "8px", width: "60%" }}
              onClick={toPost}
            >
              レシピを投稿する
            </Button>
            <Button variant="contained" sx={{ marginBottom: "8px" , width: "60%" }} onClick={toRecipes} >
              レシピを見つける
            </Button>
            <Button variant="contained" sx={{width: "60%"}} onClick={getUserId}>
              ゆーざーIDゲット ボタン
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
});

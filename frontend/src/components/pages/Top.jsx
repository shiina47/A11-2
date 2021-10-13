import { memo } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useAuth } from "../../hooks/useAuth";

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
      <Grid container alignItems="center" direction="column">
        <Grid item xs={8}>
          <p>早いレシピを早く届ける</p>
        </Grid>
        <Grid item xs={8}>
          <Button variant="contained" onClick={toPost}>
            レシピを投稿する
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button variant="contained" onClick={toRecipes}>
            レシピを見つける
          </Button>
        </Grid>
      </Grid>
      <Button variant="contained" onClick={getUserId}>
        ゆーざーIDゲット ボタン
      </Button>
    </>
  );
});

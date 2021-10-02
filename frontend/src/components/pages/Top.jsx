import { memo } from "react";
import { useHistory } from "react-router-dom";

export const Top = memo(() => {
  const history = useHistory();
  const toPost = () => {
    history.push("/post");
  };
  const toRecipes = () => {
    history.push("/recipes");
  };

  return (
    <>
      <p>トップ</p>
      <button onClick={toPost}>レシピを投稿する</button>
      <button onClick={toRecipes}>レシピを見つける</button>
    </>
  );
});

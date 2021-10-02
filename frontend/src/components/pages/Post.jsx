import { memo, useState } from "react";
import { TextField } from "@mui/material";

export const Post = memo(() => {
  const [recipe, setRecipe] = useState({
    title: "",
    cost: 0,
    minutes: 0,
    image: null,
  });
  return (
    <>
      <div>
        <p>レシピ投稿</p>
        <TextField label="title" />
        <TextField label="cost" />
        <TextField label="minutes" />
        <input type="file" />
        <br />
        <TextField label="material" />
        <br />
        <TextField label="process" />
      </div>
    </>
  );
});

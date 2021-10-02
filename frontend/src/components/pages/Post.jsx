import { memo, useState } from "react";
import { TextField, Box, Button, Stack } from "@mui/material";

export const Post = memo(() => {
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    cost: "",
    minutes: "",
    image: "",
  });

  const [materialContents, setMaterialContents] = useState([]);

  const handleChange = (event) => {
    setRecipeForm({ ...recipeForm, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    console.log(recipeForm);
  };

  return (
    <>
      <Box mx="auto" width={300}>
        <p>レシピ投稿</p>
        <Box>
          <Stack spacing={2}>
            <TextField
              label="title"
              name="title"
              value={recipeForm.title}
              onChange={handleChange}
            />
            <TextField
              label="cost"
              name="cost"
              value={recipeForm.cost}
              onChange={handleChange}
            />
            <TextField
              label="minutes"
              name="minutes"
              value={recipeForm.minutes}
              onChange={handleChange}
            />
            <input type="file" name="image" onChange={handleChange} />
          </Stack>
        </Box>

        <Box mt={2} display="flex" flexDirection="column">
          <TextField label="material" />
          <Box mt={1}>
            <Button variant="contained">追加する</Button>
          </Box>
        </Box>

        <Box mt={2} display="flex" flexDirection="column">
          <TextField label="process" />
          <Box mt={1}>
            <Button variant="contained">追加する</Button>
          </Box>
        </Box>
        <Box mt={4}>
          <Button onClick={onSubmit} variant="contained">
            投稿する
          </Button>
        </Box>
      </Box>
    </>
  );
});

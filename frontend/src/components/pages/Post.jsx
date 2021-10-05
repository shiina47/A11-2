import { memo, useState } from "react";
import { TextField, Box, Button, Stack } from "@mui/material";

export const Post = memo(() => {
  console.log("レンダリング");
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    cost: "",
    minutes: "",
    image: "",
  });

  const [materialCount, setMaterialCount] = useState(1);
  const [processCount, setProcessCount] = useState(2);

  // material の text field
  let materialList = [];
  for (let i = 0; i < materialCount; i++) {
    materialList.push(
      <TextField
        inputProps={{
          autoComplete: "off",
        }}
        label="material"
        variant="outlined"
        key={i}
      />
    );
  }
  const onClickIncrementMaterial = () => setMaterialCount((pre) => pre + 1);

  // process の text field
  let processlList = [];
  for (let i = 1; i < processCount; i++) {
    processlList.push(
      <TextField
        label="process"
        multiline
        rows={2}
        variant="outlined"
        key={-i}
      />
    );
  }
  const onClickIncrementProcess = () => setProcessCount((pre) => pre + 1);

  // recipe form のstate関連
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
            <input type="file" name="image" onChange={handleChange} />
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
          </Stack>
        </Box>

        <Box mt={2} display="flex" flexDirection="column">
          {materialList}
          <Box mt={1}>
            <Button variant="contained" onClick={onClickIncrementMaterial}>
              追加する
            </Button>
          </Box>
        </Box>

        <Box mt={2} display="flex" flexDirection="column">
          {processlList}
          <Box mt={1}>
            <Button variant="contained" onClick={onClickIncrementProcess}>
              追加する
            </Button>
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

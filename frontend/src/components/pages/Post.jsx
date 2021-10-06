import { memo, useState } from "react";
import { TextField, Box, Button, Stack } from "@mui/material";
import { TextFieldMaterial } from "../atoms/TextFieldMaterial";
import { TextFieldProcess } from "../atoms/TextFieldProcess";
import { useRecipe } from "../../hooks/useRecipe";

export const Post = memo(() => {
  console.log("レンダリング");
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    cost: "",
    minutes: "",
    image: null,
  });
  const [materials, setMaterials] = useState([]);
  const [processes, setProcesses] = useState([]);

  const { createRecipe } = useRecipe();

  // recipe form のstate関連
  const handleChange = (event) => {
    setRecipeForm({ ...recipeForm, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    console.log(recipeForm);
    createRecipe(recipeForm);
    console.log(materials);
    console.log(processes);
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
              type="number"
              label="cost"
              name="cost"
              value={recipeForm.cost}
              onChange={handleChange}
            />
            <TextField
              type="number"
              label="minutes"
              name="minutes"
              value={recipeForm.minutes}
              onChange={handleChange}
            />
          </Stack>
        </Box>

        <TextFieldMaterial materials={materials} setMaterials={setMaterials} />

        <TextFieldProcess processes={processes} setProcesses={setProcesses} />

        <Box mt={4}>
          <Button onClick={onSubmit} variant="contained">
            投稿する
          </Button>
        </Box>
      </Box>
    </>
  );
});

import { memo, useState } from "react";
import { TextField, Box, Button, Stack } from "@mui/material";
import { TextFieldMaterial } from "../atoms/TextFieldMaterial";
import { TextFieldProcess } from "../atoms/TextFieldProcess";
import { useRecipe } from "../../hooks/useRecipe";
import { useMaterial } from "../../hooks/useMaterial";
import { useProcess } from "../../hooks/useProcess";

export const Post = memo(() => {
  const [recipeForm, setRecipeForm] = useState({
    title: "",
    cost: "",
    amount: 1,
    minutes: "",
    image: null,
  });
  const [image, setImage] = useState(null);

  const [materials, setMaterials] = useState([]);
  const [processes, setProcesses] = useState([]);

  const { createRecipe } = useRecipe();
  const { createMaterial } = useMaterial();
  const { createProcess } = useProcess();

  // recipe form のstate関連
  const handleChange = (event) => {
    setRecipeForm({ ...recipeForm, [event.target.name]: event.target.value });
  };

  const onSubmit = async () => {
    recipeForm.cost = Number(recipeForm.cost);
    recipeForm.minutes = Number(recipeForm.minutes);
    recipeForm.image = image;
    const responseData = await createRecipe(recipeForm);
    const id = responseData.id;
    console.log(id);
    materials.map((material) => {
      return createMaterial(material, id);
    });
    processes.map((process) => {
      return createProcess(process, id);
    });
    return responseData;
  };

  return (
    <>
      <Box mx="auto" width={300}>
        <p>レシピ投稿</p>
        <Box>
          <Stack spacing={2}>
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
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

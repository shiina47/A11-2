import { memo, useState } from "react";
import { TextFieldMaterial } from "../atoms/TextFieldMaterial";
import { TextFieldProcess } from "../atoms/TextFieldProcess";
import { useRecipe } from "../../hooks/useRecipe";
import { useMaterial } from "../../hooks/useMaterial";
import { useProcess } from "../../hooks/useProcess";

import { TextField, Box, Button, Stack, IconButton, Grid } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

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

  // 投稿btnの処理
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

  const handlerEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput?.click();
  };

  return (
    <>
      <Box my={4} mx="auto" width={300}>
        <h2>レシピ投稿</h2>
        <Box>
          <Stack spacing={2}>
            <input
              type="file"
              name="image"
              id="imageInput"
              hidden={true}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <h4>写真を投稿</h4>
            <IconButton onClick={handlerEditPicture} size="large">
              <AddPhotoAlternateIcon color="secondary" fontSize="large" />
            </IconButton>
            <Grid container spacing={2}>
              <h4>タイトル</h4>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  placeholder="例：親子丼"
                  value={recipeForm.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  type="number"
                  name="cost"
                  placeholder="例：100"
                  value={recipeForm.cost}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <p>円</p>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  type="number"
                  name="minutes"
                  placeholder="例：5"
                  value={recipeForm.minutes}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <p>分</p>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Box my={2}>
          <TextFieldMaterial
            materials={materials}
            setMaterials={setMaterials}
          />
        </Box>

        <TextFieldProcess processes={processes} setProcesses={setProcesses} />

        <Box mt={4}>
          <Button sx={{ width: "100%" }} onClick={onSubmit} variant="contained">
            投稿する
          </Button>
        </Box>
      </Box>
    </>
  );
});

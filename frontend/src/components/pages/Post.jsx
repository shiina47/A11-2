import { memo, useState } from "react";
import { Box, Stack, Typography, Alert } from "@mui/material";

import { TextFieldMaterial } from "../Post/TextFieldMaterial";
import { TextFieldProcess } from "../Post/TextFieldProcess";
import { useRecipe } from "../../hooks/useRecipe";
import { useMaterial } from "../../hooks/useMaterial";
import { useProcess } from "../../hooks/useProcess";
import { useHistory } from "react-router-dom";
import { InputField } from "../atoms/InputField";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { InputFile } from "../Post/InputFile";

const initialState = {
  title: "",
  cost: "",
  amount: 1,
  minutes: "",
  image: null,
};

export const Post = memo(() => {
  const [recipeForm, setRecipeForm] = useState(initialState);
  const [image, setImage] = useState(null);
  const [alert, setAlert] = useState(false);

  const [materials, setMaterials] = useState([]);
  const [processes, setProcesses] = useState([]);

  const { createRecipe } = useRecipe();
  const { createMaterial } = useMaterial();
  const { createProcess } = useProcess();

  // recipe form のstate関連
  const handleChange = (event) => {
    setRecipeForm({ ...recipeForm, [event.target.name]: event.target.value });
  };

  const history = useHistory();

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
    setRecipeForm(initialState);
    history.push("/recipes");
    return responseData;
  };

  const handlerEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput?.click();
  };

  return (
    <>
      <Box my={4} mx="auto" width={300}>
        <Typography fontWeight="bold" variant="h5" color="text.primary">
          レシピ投稿
        </Typography>
        <Box>
          <Stack spacing={2}>
            <input
              type="file"
              name="image"
              id="imageInput"
              hidden={true}
              onChange={(e) => {
                setImage(e.target.files[0]);
                setAlert(!alert);
              }}
            />
            <Typography fontWeight="bold" variant="body1" color="text.primary">
              写真
            </Typography>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <InputFile onClick={handlerEditPicture}>ファイルを選択</InputFile>
              {alert ? (
                <Box mt={2}>
                  <Alert severity="success">写真を選択しました</Alert>
                </Box>
              ) : (
                <></>
              )}
            </Box>

            <Box>
              <Typography
                fontWeight="bold"
                variant="body1"
                color="text.primary"
              >
                タイトル
              </Typography>
              <InputField
                type="text"
                name="title"
                placeholder="例：親子丼"
                value={recipeForm.title}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <Typography
                fontWeight="bold"
                variant="body1"
                color="text.primary"
              >
                調理時間
              </Typography>
              <Box display="flex">
                <InputField
                  type="number"
                  name="minutes"
                  placeholder="例：5"
                  value={recipeForm.minutes}
                  onChange={handleChange}
                />

                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight="bold"
                  alignSelf="flex-end"
                  marginLeft="2px"
                >
                  分
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                fontWeight="bold"
                variant="body1"
                color="text.primary"
              >
                費用
              </Typography>
              <Box display="flex">
                <InputField
                  type="number"
                  name="cost"
                  placeholder="例：100"
                  value={recipeForm.cost}
                  onChange={handleChange}
                />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontWeight="bold"
                  alignSelf="flex-end"
                  marginLeft="2px"
                >
                  円
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>

        <Box my={2}>
          <TextFieldMaterial
            materials={materials}
            setMaterials={setMaterials}
          />
        </Box>

        <TextFieldProcess processes={processes} setProcesses={setProcesses} />

        <Box display="flex" justifyContent="center" mt={4}>
          <PrimaryBtn onClick={onSubmit}>投稿する</PrimaryBtn>
        </Box>
      </Box>
    </>
  );
});

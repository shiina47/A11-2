/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

export const useRecipe = () => {
  const [newRecipeState, setNewRecipeState] = useState("");

  const createRecipe = useCallback(async (data) => {
    const uploadData = new FormData();
    uploadData.append("title", data.title);
    uploadData.append("cost", data.cost);
    uploadData.append("amount", data.amount);
    uploadData.append("minutes", data.minutes);
    // uploadData.append("liked", data.liked);
    // uploadData.append("material", data.material);
    // uploadData.append("process", data.process);
    data.image && uploadData.append("image", data.image, data.image.name);

    const res = await axios
      .post("http://127.0.0.1:8000/api/recipe/", uploadData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        const newRecipe = res.data;
        setNewRecipeState(newRecipe);
      })
      .catch(() => {
        alert("失敗");
      });
    return res;
  }, []);

  return {
    createRecipe,
    newRecipeState,
  };
};

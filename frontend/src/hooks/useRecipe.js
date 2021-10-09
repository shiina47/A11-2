/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import axios from "axios";

export const useRecipe = () => {
  const createRecipe = useCallback(async (data) => {
    const uploadData = new FormData();
    uploadData.append("title", data.title);
    uploadData.append("cost", data.cost);
    uploadData.append("amount", data.amount);
    uploadData.append("minutes", data.minutes);
    data.image && uploadData.append("image", data.image, data.image.name);

    const res = await axios.post(
      "http://127.0.0.1:8000/api/recipe/",
      uploadData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      }
    );
    return res.data;
  }, []);

  return {
    createRecipe,
  };
};

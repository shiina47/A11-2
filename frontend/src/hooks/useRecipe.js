/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

export const useRecipe = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [myLikedRecipes, setMyLikedRecipes] = useState([]);

  const getMyRecipes = useCallback(async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/myself/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });

    axios
      .get(`http://127.0.0.1:8000/api/recipe/?user=${res.data.id}`, {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => setMyRecipes(res.data));
  });

  const getMyLikedRecipes = useCallback(async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/myself/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });

    axios
      .get(`http://127.0.0.1:8000/api/recipe/?liked=${res.data.id}`, {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => setMyLikedRecipes(res.data));
  });

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
    getMyRecipes,
    myRecipes,
    getMyLikedRecipes,
    myLikedRecipes,
  };
};

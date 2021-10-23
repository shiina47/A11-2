/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

export const useRecipe = () => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(undefined);
  const [myLikedRecipes, setMyLikedRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMyRecipes = useCallback(async () => {
    setLoading(true);
    const res = await axios.get("http://127.0.0.1:8000/api/myself/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });

    const responseRecipes = await axios.get(
      `http://127.0.0.1:8000/api/recipe/?user=${res.data.id}`,
      {
        headers: {
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      }
    );
    setMyRecipes(responseRecipes.data);
  });

  const getSelectedRecipe = useCallback(async (id) => {
    const res = await axios.get(`http://127.0.0.1:8000/api/recipe/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });

    function compare(a, b) {
      const orderA = a.order;
      const orderB = b.order;

      let comparison = 0;
      if (orderA > orderB) {
        comparison = 1;
      } else if (orderA < orderB) {
        comparison = -1;
      }
      return comparison;
    }

    res.data.process = await res.data.process.sort(compare);
    setSelectedRecipe(res.data);
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
      .then((res) => setMyLikedRecipes(res.data))
      .finally(() => setLoading(false));
  }, []);

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
    getSelectedRecipe,
    selectedRecipe,
    loading,
  };
};

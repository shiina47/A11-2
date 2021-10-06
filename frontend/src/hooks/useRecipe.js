/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import axios from "axios";

export const useRecipe = () => {
  const createRecipe = useCallback((data) => {
    console.log(data);
    data.cost = Number(data.cost);
    data.minutes = Number(data.minutes);
    axios
      .post("http://127.0.0.1:8000/api/recipe/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.localJWT}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        alert("失敗");
      });
  }, []);

  return {
    createRecipe,
  };
};

/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import axios from "axios";

export const useProcess = () => {
  const createProcess = useCallback(async (data, id) => {
    console.log(id);
    const res = await axios
      .post(
        "http://127.0.0.1:8000/api/process/",
        { order: data.order, how_to: data.how_to, recipe: id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.localJWT}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        alert("失敗");
      });
    return res;
  }, []);

  return {
    createProcess,
  };
};

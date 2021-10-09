/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import axios from "axios";

export const useProcess = () => {
  const createProcess = useCallback(async (data, id) => {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/process/",
      { order: data.order, how_to: data.how_to, recipe: id },
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
    createProcess,
  };
};

import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const useAuth = () => {
  const history = useHistory();

  const login = useCallback(
    (data) => {
      axios
        .post("http://127.0.0.1:8000/authen/jwt/create", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          localStorage.setItem("localJWT", res.data.access);
          history.push("/recipes");
        })
        .catch(() => {
          alert("ログインできません");
        });
    },
    [history]
  );

  const register = useCallback(
    (data) => {
      axios
        .post("http://127.0.0.1:8000/api/register/", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          login(data);
        })
        .catch(() => {
          alert("作成できません");
        });
    },
    [login]
  );

  const getUserId = useCallback(async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/myself/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.localJWT}`,
      },
    });
    console.log(res.data.id);
    return res.data.id;
  }, []);

  return { login, register, getUserId };
};

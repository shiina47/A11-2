import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const onChangeMail = (event) => setMail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const onClickLogin = () => {
    login({ email: mail, password: password });
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" , width:"100%"}}
    >
      <h1 style={{ fontSize: "50px" }}>Reciper</h1>
      <h3>ログイン</h3>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" , width:"100%" }}>
        <TextField
          sx={{ margin: "8px" }}
          fullWidth
          label="メールアドレス"
          id="fullWidth"
          onChange={onChangeMail}
          value={mail}
        />
        <TextField
          sx={{ margin: "8px" }}
          fullWidth
          label="パスワード"
          id="fullWidth"
          onChange={onChangePassword}
          value={password}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Button
          sx={{ margin: "8px 0px", width: "100%" }}
          variant="contained"
          onClick={onClickLogin}
        >
          ログイン
        </Button>
      </Box>
    </Box>
  );
}

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");

  const { register } = useAuth();

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPass(event.target.value);
  const onChangeConPassword = (event) => setConPass(event.target.value);

  const onClickRegister = () => {
    console.log({
      email: email,
      password: pass,
      password_confirmation: conPass,
    });
    register({
      email: email,
      password: pass,
      password_confirmation: conPass,
    });
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1 style={{ fontSize: "50px" }}>Reciper</h1>
      <h3>ユーザー登録</h3>
      <Box>
        <TextField
          sx={{ margin: "8px" }}
          fullWidth
          label="メールアドレス"
          id="fullWidth"
          onChange={onChangeEmail}
          value={email}
        />
        <TextField
          sx={{ margin: "8px" }}
          fullWidth
          label="パスワード"
          id="fullWidth"
          onChange={onChangePassword}
          value={pass}
        />
        <TextField
          sx={{ margin: "8px" }}
          fullWidth
          label="パスワード（確認）"
          id="fullWidth"
          onChange={onChangeConPassword}
          value={conPass}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Button
          sx={{ margin: "8px 0px", width: "100%" }}
          variant="contained"
          onClick={onClickRegister}
        >
          ユーザー登録
        </Button>
      </Box>
    </Box>
  );
}

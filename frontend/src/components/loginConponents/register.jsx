import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

import { useAuth } from "../../hooks/useAuth";
import { LoginBtn } from "./LoginBtn";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");

  const { register } = useAuth();

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPass(event.target.value);
  const onChangeConPassword = (event) => setConPass(event.target.value);

  const onClickRegister = () => {
    register({
      email: email,
      password: pass,
      password_confirmation: conPass,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        color="text.primary"
        style={{ fontSize: "50px" }}
      >
        Reciper
      </Typography>
      <Typography
        variant="h6"
        marginTop="50px"
        fontWeight="bold"
        color="text.primary"
      >
        ユーザー登録
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
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
        <LoginBtn onClick={onClickRegister}>ユーザー登録</LoginBtn>
      </Box>
    </Box>
  );
}

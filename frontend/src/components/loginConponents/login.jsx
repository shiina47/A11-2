import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { LoginBtn } from "./LoginBtn";

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
        ログイン
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
        <LoginBtn onClick={onClickLogin}>ログイン</LoginBtn>
      </Box>
    </Box>
  );
}

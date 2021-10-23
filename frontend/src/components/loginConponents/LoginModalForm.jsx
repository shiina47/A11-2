import { memo, useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { useAuth } from "../../hooks/useAuth";
import { LoginBtn } from "./LoginBtn";

export const LoginModalForm = memo(() => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const { login, register } = useAuth();

  const onChangeMail = (event) => setMail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);
  const onChangeConfirmPassword = (event) =>
    setConfirmPassword(event.target.value);

  const onClickLogin = () => {
    return isLogin
      ? login({ email: mail, password: password })
      : register({
          email: mail,
          password: password,
          password_confirmation: confirmPassword,
        });
  };

  const onClickChangeLoginView = () => setIsLogin(!isLogin);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      width="90%"
      marginX="auto"
    >
      <Typography variant="h6" fontWeight="bold" color="text.primary">
        {isLogin ? "ログイン" : "新規登録"}
      </Typography>
      <Box width="90%">
        <Box>
          <AuthLabel htmlFor="email">メールアドレス</AuthLabel>
          <AuthInputField
            id="email"
            placeholder="test@gmail.com"
            type="text"
            onChange={onChangeMail}
            autoComplete="off"
            value={mail}
          />
        </Box>
        <Box marginTop="10px">
          <AuthLabel htmlFor="password">パスワード</AuthLabel>
          <AuthInputField
            id="password"
            placeholder="password"
            type="password"
            autoComplete="off"
            onChange={onChangePassword}
            value={password}
          />
        </Box>
        {isLogin ? null : (
          <Box marginTop="10px">
            <AuthLabel htmlFor="confirm_password">パスワード（確認)</AuthLabel>
            <AuthInputField
              id="confirm_password"
              placeholder="password"
              type="password"
              autoComplete="off"
              onChange={onChangeConfirmPassword}
              value={confirmPassword}
            />
          </Box>
        )}
      </Box>
      <Box sx={{ width: "100%" }}>
        <LoginBtn onClick={onClickLogin}>
          {isLogin ? "ログイン" : "新規登録"}
        </LoginBtn>
      </Box>
      <Typography
        color="orange"
        marginTop="10px"
        onClick={onClickChangeLoginView}
      >
        {isLogin ? "アカウントを作成しますか？" : "ログイン画面へ"}
      </Typography>
    </Box>
  );
});

const AuthLabel = styled.label`
  color: #222222;
`;

const AuthInputField = styled.input`
  width: 100%;
  background-color: #e6e6e6;
  border-radius: 5px;
  border: none;
  height: 30px;
  padding: 5px;
  margin-top: 10px;
`;

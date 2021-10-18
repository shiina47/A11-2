import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Register from "./register";
import Login from "./login";

/*register.jsx(登録画面)とlogin.jsx(ログイン画面)を切り替えるボタンの処理*/
export default function Switch() {
  const [switchLogin, setSwitchLogin] = useState(false);
  const onClickSwitchLogin = () => {
    setSwitchLogin(!switchLogin);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          height: "600px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {(() => {
          /*  switchLoginがfalseであれば登録画面（ユーザー登録）を表示 */
          if (switchLogin === false) {
            return (
              <Box sx={{ width: "100%" }}>
                <Register />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    marginTop: "5px",
                  }}
                >
                  <Typography
                    color="warning.light"
                    onClick={onClickSwitchLogin}
                  >
                    登録済みの方
                  </Typography>
                </Box>
              </Box>
            );
            /*  違えばログイン画面を表示 */
          } else {
            return (
              <Box sx={{ width: "100%" }}>
                <Login />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    marginTop: "5px",
                  }}
                >
                  <Typography
                    color="warning.light"
                    onClick={onClickSwitchLogin}
                  >
                    新規登録
                  </Typography>
                </Box>
              </Box>
            );
          }
        })()}
      </Box>
    </Box>
  );
}

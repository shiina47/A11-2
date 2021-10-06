import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <Box sx={{display :"flex" , alignItems: "center" , flexDirection: "column" }}>
        <h1 style={{ fontSize: "50px" }}>Reciper</h1>
        <h3>ログイン</h3>
        <Box>
          <TextField sx={{margin: "8px"}} fullWidth label="メールアドレス" id="fullWidth" />
          <TextField sx={{margin: "8px"}} fullWidth label="パスワード" id="fullWidth" />
        </Box>
        <Box sx={{width: "100%"}}>
          <Button　sx={{margin: "8px 0px" , width: "100%"}} variant="contained">
            ログイン
          </Button>  
        </Box>  
      </Box>
  );
}
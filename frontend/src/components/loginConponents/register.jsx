import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Register() {
  return (
    <Box sx={{ display: "flex" ,justifyContent: "center" }}>
      <Box sx={{ height: "600px" , width: "300px" , display: "flex" , flexDirection: "column", alignItems: "center"}}>
        <h1 style={{ fontSize: "50px" }}>Reciper</h1>
        <h3>ユーザー登録</h3>
        <Box sx={{ flexGrow: 0 }}>
        <TextField fullWidth label="user neme" id="fullWidth" />
          <TextField fullWidth label="password" id="fullWidth" />
          <TextField fullWidth label="password" id="fullWidth" />
        </Box>
        <Box>
          <Button>
            ユーザー登録
          </Button>  
        </Box>  
      </Box>
    </Box>  
  );
}
      

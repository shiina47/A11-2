import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Register from "./register";
import Login from "./login";

export default function Switch() {
  const [switchLogin , setSwitchLogin] = useState(false);
  const onClickSwitchLogin = () => {
    setSwitchLogin(!switchLogin);
  };


  return (
    <Box sx={{ display: "flex" ,justifyContent: "center" }}>
      <Box sx={{ height: "600px" , width: "300px" , display: "flex" , flexDirection: "column", alignItems: "center"}}>
      {
        (() => {
          if (switchLogin === false){
            return<Box> 
                <Register/>
                <Box sx={{display:"flex" , justifyContent: "center"}}>
                  <Button onClick={onClickSwitchLogin}>
                    登録済みの方
                  </Button>
                </Box>
            </Box>
          }else{
            return<Box sx={{alignItems: "center"}}> 
              <Login/>
              <Box sx={{display:"flex" , justifyContent: "center"}}>
                <Button onClick={onClickSwitchLogin}>
                  新規登録
                </Button>
              </Box>
            </Box>
          }
        })()
      }
      </Box>
    </Box>  
  )
};
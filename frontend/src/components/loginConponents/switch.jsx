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
    <Box>
      {
        (() => {
          if (switchLogin === false){
            return <Register/>
          }else{
            return<Login/>  
          }
        })()
    }
      <Button onClick={onClickSwitchLogin}>
        登録済みの方
      </Button>  
    </Box>  
  )
};
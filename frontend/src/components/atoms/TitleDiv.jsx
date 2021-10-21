import { memo } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

export const TitleDiv = memo((props) => {
  const { children } = props;
  return (
    <>
      <STitleDiv>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="white"
          textAlign="center"
          mt={1}
        >
          {children}
        </Typography>
      </STitleDiv>
    </>
  );
});

const STitleDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 360px;
  height: 40px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ff9800;
  border-radius: 10px;
`;

import { memo } from "react";
import { Typography } from "@mui/material";

import styled from "styled-components";

export const LoginBtn = memo((props) => {
  const { onClick, children } = props;
  return (
    <>
      <SLoginBtn onClick={onClick}>
        <Typography variant="body1" fontWeight="bold">
          {children}
        </Typography>
      </SLoginBtn>
    </>
  );
});

const SLoginBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 20px;
  margin: 0 auto;
  margin-top: 15px;
  padding: 10px;
  color: #ffffff;
  border-radius: 60vh;
  transition: 0.3s;
  background-color: #ff9800;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

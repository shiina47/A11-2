import { memo } from "react";
import { Typography } from "@mui/material";

import styled from "styled-components";

export const InputFile = memo((props) => {
  const { onClick, children } = props;
  return (
    <>
      <SPrimaryBtn onClick={onClick}>
        <Typography variant="body1" fontWeight="bold">
          {children}
        </Typography>
      </SPrimaryBtn>
    </>
  );
});

const SPrimaryBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 20px;
  margin: 0 auto;
  padding: 10px;
  color: #ffffff;
  border-radius: 50vh;
  transition: 0.3s;
  background-color: #ff961e;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

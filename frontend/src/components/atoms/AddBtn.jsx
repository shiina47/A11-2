import { memo } from "react";
import { Typography } from "@mui/material";

import styled from "styled-components";

export const AddBtn = memo((props) => {
  const { onClick, children } = props;
  return (
    <>
      <SAddBtn onClick={onClick}>
        <Typography variant="body1" fontWeight="bold">
          {children}
        </Typography>
      </SAddBtn>
    </>
  );
});

const SAddBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 20px;
  margin: 0 auto;
  padding: 10px;
  color: #303030;
  border-radius: 50vh;
  transition: 0.3s;
  background-color: #e4e4e4f8;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

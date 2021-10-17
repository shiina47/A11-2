import { memo } from "react";
import styled from "styled-components";

export const TitleDiv = memo((props) => {
  const { children } = props;
  return (
    <>
      <STitleDiv>{children}</STitleDiv>
    </>
  );
});

const STitleDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 40px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ff9800;
  border-radius: 10px;
`;

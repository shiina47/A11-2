import { memo } from "react";
import styled from "styled-components";

export const InputField = memo((props) => {
  const { id = null, type, name, placeholder, value, onChange } = props;
  return (
    <>
      <SInputField
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </>
  );
});

const SInputField = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 20px;
  box-sizing: border-box;
  text-align: center;
`;

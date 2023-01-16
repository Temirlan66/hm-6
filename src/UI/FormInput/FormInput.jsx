import React from "react";
import styled from "styled-components";
const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <ContainerInput>
      <LabelText htmlFor={id}>{labelName}</LabelText>
      <MyInput
        placeholder={placeholder || ".."}
        id={id}
        type={inputType}
        {...rest}
      />
    </ContainerInput>
  );
};

const ContainerInput = styled.div`
   display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
  font-size: 1rem;
`

const MyInput = styled.input`
  outline: none;
  width: 350px;
  height: 40px;
  border-radius: 10px;
  border: none;
`

const LabelText = styled.label`
  font-weight: 500;
  display: flex;
  margin-bottom: 10px;
`
export default FormInput;

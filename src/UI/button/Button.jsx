import React from "react";
import styled from "styled-components";


const Button = (props) => {
  return (
    <MyBtn className="myBtn" onClick={props.onClick}>
      {props.title} 
    </MyBtn>
  );
};

const MyBtn = styled.button`
  background-color: #4A026B;
    color: azure;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 10px;
    border: none;
    height: 60px;
`

export default Button;

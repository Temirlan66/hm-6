import React from "react";
import styled from "styled-components";

const ExpenseItem = ({ date, title, price }) => {
  return (
    <ItemDiv>
      <LeftSide>
        <PTextDate>{date.toString()}</PTextDate>
        <p className="">{title}</p>
      </LeftSide>
      <p className="price">$ {price}</p>
    </ItemDiv>
  );
};

const ItemDiv = styled.div`
  margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    background-color: #4B4B4B;
    border-radius: 15px;
    margin-top: 20px;
`

const LeftSide =styled.div`
  display: flex;
    justify-content: space-around;
`

const PTextDate = styled.p`
    text-align: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 15px;
    color: #ffffff;
    box-sizing: border-box;
    width: 82.11px;
    height: 80px;
    background: #2a2a2a;
    border: 1px solid #ffffff;
    border-radius: 10px;
`
export default ExpenseItem;

import React from "react";
import styled from "styled-components";


const ChartBarBacground = styled.div`
   height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ChartBarInner = styled.div`
height: 100%;
    width: 100%;
    border: 1px solid black;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ChartBarLabel = styled.div`
     font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    color: black;
`
const ChartBar = ({ maximumPrice, currentPrice, label }) => {
  const fillHeigt = (100 * currentPrice) / maximumPrice;
  return (
    <ChartBarBacground className="chart-bar">
      <ChartBarInner
        className="chart-bar__inner"
        style={{ height: `${fillHeigt}` }}
      ></ChartBarInner>
      <ChartBarLabel className="chart-bar__label">{label}</ChartBarLabel>
    </ChartBarBacground>
  );
};


export default ChartBar;

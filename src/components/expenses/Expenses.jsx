import React from "react";
import { useState } from "react";
import ExpenseItem from "../expenceItem/ExpenceItem";
import ExpensesFilter from "../expensesFilter/ExpensesFIilter";
import Chart from "../chart/Chart";
import styled from "styled-components";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredItems = expenses.filter((element) => {
    const stringYear = new Date(element.date).getFullYear().toString();
    return stringYear === selectedYear;
  });
  console.log(filteredItems);
  return (
    < MainContainer>
      <Ulka>
        <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
        <Chart items={filteredItems} />
        {filteredItems.map((expense, index) => (
          <ExpenseItem
            key={index}
            price={expense.price}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Ulka>
    </ MainContainer>
  );
};


const MainContainer= styled.div`
   margin: auto 0;
    display: flex;
    justify-content: center;
`

const Ulka = styled.ul`

  padding: 20px;
    border-radius: 15px;
    background-color: black;
    width: 900px;
    height: max-content;
    color: rgb(242, 242, 242);
`

export default Expenses;


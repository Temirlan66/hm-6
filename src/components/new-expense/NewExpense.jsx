import React, { useState } from "react";
import styled from "styled-components";
import Button  from "../../UI/button/Button";
import ExpenseForm from "../expence-form/ExpenseForm";


const NewExpense = ({ onNewExpenseAdd }) => {
  
  const [showForm, setShowForm] = useState(false);
  
  const showExpenseForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };
  return (
    <MyContainer>
      <Container>
        {showForm ? (
          <ExpenseForm
            onSwowForm={showExpenseForm}
            onNewExpenseAdd={onNewExpenseAdd}
          />
        ) : (
          <Button title="Добавить новый расход" onClick={showExpenseForm} />
        )}
      </Container>
    </MyContainer>
  );
};

const MyContainer = styled.div`
  margin: auto 0;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  background-color: #AD9BE9;
    width: 900px;
    border-radius: 10px;
    padding: 30px;
`
export default NewExpense;

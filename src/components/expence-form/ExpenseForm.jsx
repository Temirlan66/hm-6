import React, { useState } from "react";
import Button  from "../../UI/button/Button";
import FormInput from "../../UI/FormInput/FormInput";
import styled from "styled-components";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(null);

  const cancelHandler = (e) => {
    e.preventDefault();
    props.onSwowForm();
  };

  const titleInputChangeHadler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHadler = (event) => {
    setPrice(event.target.value);
    console.log(event);
  };

  const dateInputChangeHadler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      price,
      date,
    };

    props.onNewExpenseAdd(expenseData)
  };


  return (
    <MainForm>
      <FormInput
        id="name"
        labelName="Заголовок"
        inputType="text"
        placeholder="Введите название"
        value={title}
        onChange={titleInputChangeHadler}
      />

      <FormInput
        labelName="Количества"
        inputType="number"
        id="price"
        value={price}
        onChange={priceInputChangeHadler}
      />

      <FormInput
        labelName="Датировать"
        inputType="date"
        placeholder="дд.мм.гггг"
        id="date"
        value={date}
        onChange={dateInputChangeHadler}
      />

      <BtnDiv>
        <Button title="Отмена" onClick={cancelHandler} />
        <Button title="Добавить новые расходы" onClick={saveHandler} />
      </BtnDiv>
    </MainForm>
  );
};

const MainForm = styled.form`
  display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const BtnDiv = styled.div`
   margin-right: -1rem;
    margin-top: 2rem;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
`
export default ExpenseForm;

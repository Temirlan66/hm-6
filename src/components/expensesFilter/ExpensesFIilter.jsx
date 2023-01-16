import React from "react";
import styled from "styled-components";

const ExpensesFilter = ({value, onChange}) => {
    return (
        <DivMonth>
            <label >Фильтр по году</label>
            <select onChange={onChange} value={value}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </DivMonth>
    );
};

const DivMonth = styled.div `
        display: flex;
    align-items: center;
    justify-content: space-between;

`


export default ExpensesFilter;
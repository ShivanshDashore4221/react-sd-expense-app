import React from "react";
import styled from "styled-components";
import ExpCard from "./ExpCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  padding: 40px 20px;
  text-align: center;
  color: #8ca0be;
  border: 1px dashed #22304a;
  border-radius: 14px;
`;

const ExpList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return (
      <Grid>
        <EmptyState>No expenses match this filter yet.</EmptyState>
      </Grid>
    );
  }

  return (
    <Grid>
      {expenses.map((expense) => (
        <ExpCard key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </Grid>
  );
};

export default ExpList;

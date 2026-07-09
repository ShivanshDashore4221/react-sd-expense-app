import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 12px;
  align-items: end;
  background: #121c2e;
  border: 1px solid #22304a;
  border-radius: 14px;
  padding: 18px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.75rem;
  color: #8ca0be;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

const inputStyles = `
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.95rem;
`;

const Input = styled.input`
  ${inputStyles}
  border: 1px solid #22304A;
  background: #0b1220;
  color: #e8edf6;

  &:focus-visible {
    outline: 2px solid #4dd6c4;
    outline-offset: 1px;
  }
`;

const Select = styled.select`
  ${inputStyles}
  border: 1px solid #22304A;
  background: #0b1220;
  color: #e8edf6;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 13px;
  border-radius: 8px;
  border: none;
  background: #4dd6c4;
  color: #0b1220;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.15s ease;

  &:hover {
    filter: brightness(1.08);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  font-size: 0.8rem;
  color: #ff6b6b;
`;

const ExpForm = ({ onAddExpense, totalCount }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const parsedAmount = Number(amount);

    if (!trimmedName || !parsedAmount || parsedAmount <= 0) {
      setError("Enter a name and an amount greater than 0.");
      return;
    }

    const newCount = totalCount + 1;

    onAddExpense({
      id: `TXN-SD-${String(newCount).padStart(3, "0")}`,
      name: trimmedName,
      amount: parsedAmount,

      category: category,
    });

    setError("");

    setName("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor="expense-name">Name</Label>
        <Input
          id="expense-name"
          type="text"
          placeholder="e.g. Movie tickets"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Field>

      <Field>
        <Label htmlFor="expense-amount">Amount (₹)</Label>
        <Input
          id="expense-amount"
          type="number"
          min="1"
          placeholder="500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Field>

      <Field>
        <Label htmlFor="expense-category">Category</Label>
        <Select
          id="expense-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
        </Select>
      </Field>

      <SubmitButton type="submit">+ Add Expense</SubmitButton>

      {error && <ErrorText>{error}</ErrorText>}
    </Form>
  );
};

export default ExpForm;

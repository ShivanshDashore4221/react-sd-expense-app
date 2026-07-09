import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid #22304a;
  background: #121c2e;
  color: #e8edf6;
  font-size: 0.9rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #4dd6c4;
    outline-offset: 2px;
  }
`;

const CountLabel = styled.span`
  font-size: 0.85rem;
  color: #8ca0be;
`;

const CATEGORIES = ["All", "Food", "Travel", "Shopping", "Bills"];

function CategoryFilter({
  selectedCategory,
  onChange,
  visibleCount,
  totalCount,
}) {
  return (
    <Wrapper>
      <Select
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <CountLabel>
        Showing {visibleCount} of {totalCount} expenses
      </CountLabel>
    </Wrapper>
  );
}

export default CategoryFilter;

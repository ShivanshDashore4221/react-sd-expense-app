import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 14px 18px;
  background: rgba(77, 214, 196, 0.12);
  border: 1px solid #4dd6c4;
  border-radius: 14px;
`;

const Label = styled.span`
  font-size: 0.85rem;
  color: #8ca0be;
`;

const Value = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #4dd6c4;
`;

const Summary = ({ total }) => {
  return (
    <Bar>
      <Label>Total Spent:</Label>
      <Value>₹{total}</Value>
    </Bar>
  );
};

export default Summary;

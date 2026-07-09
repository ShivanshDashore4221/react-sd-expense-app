import React from "react";
import styled from "styled-components";

const Card = styled.article`
  background: #121c2e;
  border: 1px solid #22304a;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(7, 7, 7, 0.35);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition:
    transform 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #4dd6c4;
  }
`;

const CATEGORY_COLORS = {
  Food: {
    fg: "#F6A15D",
    bg: "rgba(246, 161, 93, 0.14)",
  },
  Travel: {
    fg: "#5B8DEF",
    bg: "rgba(91, 141, 239, 0.14)",
  },
  Shopping: {
    fg: "#C77DFF",
    bg: "rgba(199, 125, 255, 0.14)",
  },
  Bills: {
    fg: "#FF6B6B",
    bg: "rgba(255, 107, 107, 0.14)",
  },
  All: {
    fg: "#8CA0BE",
    bg: "rgba(140, 160, 190, 0.14)",
  },
};

const Amount = styled.p`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: #e8edf6;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #e8edf6;
`;

const TxnId = styled.span`
  font-size: 0.75rem;
  color: #8ca0be;
  font-variant-numeric: tabular-nums;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`;

const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: ${({ $category }) =>
    CATEGORY_COLORS[$category]?.fg ?? CATEGORY_COLORS.All.fg};

  background: ${({ $category }) =>
    CATEGORY_COLORS[$category]?.bg ?? CATEGORY_COLORS.All.bg};
`;

const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #22304a;
  background: transparent;
  color: #ff6b6b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    background: rgba(255, 107, 107, 0.12);
    border-color: #ff6b6b;
  }
`;

const ExpCard = ({ expense, onDelete }) => {
  const { id, name, amount, category } = expense;
  return (
    <Card>
      <Amount>₹ {amount}</Amount>
      <TxnId>{id}</TxnId>
      <Name>{name}</Name>
      <Footer>
        <Badge $category={category}>{category}</Badge>
        <DeleteButton
          onClick={() => onDelete(id)}
          aria-label={`Delete ${name}`}
        >
          🗑
        </DeleteButton>
      </Footer>
    </Card>
  );
};

export default ExpCard;

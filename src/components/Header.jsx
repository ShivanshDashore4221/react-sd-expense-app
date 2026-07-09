import React from "react";
import styled from "styled-components";
import Clock from "./Clock";

const Bar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 22px;
  flex-wrap: wrap;
  gap: 12px;
  background-color: #121c2e;
  border-bottom: 1px solid #22304a;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  letter-spacing: 0.2px;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ToggleButton = styled.button`
  padding: 8px 14px;
  border-radius: 20px;
  border: 1px solid #22304a;
  background: transparent;
  color: #8ca0be;
  font-size: 0.85rem;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
  &:hover {
    border-color: #4dd6c4;
    color: #e8edf6;
  }
`;

const Header = ({ showClock, onToggleClock }) => {
  return (
    <Bar>
      <Title> SD Expense App </Title>
      <RightContainer>
        {showClock && <Clock />}
        <ToggleButton onClick={onToggleClock}>
          {showClock ? "Hide Clock" : "Show Clock"}
        </ToggleButton>
      </RightContainer>

      {/* <Title>SD Expense App</Title> */}
      {/* <RightCluster>
        {showClock && <Clock />}
        <ToggleButton onClick={onToggleClock}>
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </ToggleButton>
      </RightCluster> */}
    </Bar>
  );
};
export default Header;

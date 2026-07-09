import React from "react";
import styled from "styled-components";

const MainSection = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    padding: 16px;
    gap: 16px;
  }
`;

export default MainSection;

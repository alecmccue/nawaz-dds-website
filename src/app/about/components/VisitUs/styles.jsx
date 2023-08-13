import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ColumnWrapper = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const IconWrapper = styled.div`
  background-color: transparent;
  border-radius: 50%;
  padding: 0.5rem;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 2rem;
  justify-content: center;
`;

export const MarketingImage = styled.img`
  height: auto;
  width: 100%;
`;
export const MarketingImage2 = styled.img`
  height: 20rem;
  width: 100%;
`;
export const MarketingImage3 = styled.img`
  height: 10rem;
  width: 100%;
`;

export const MapWrapper = styled.div`
  padding: 0 2rem;

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
  }
`;

export const MarketingStatementWrapper = styled.div`
  background-color: #fafcfa;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    padding: 0;
    gap: 1rem;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    padding: 0 2rem;
    gap: 1rem;
  }
`;

export const StackItemText = styled(Typography)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const StackItemWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

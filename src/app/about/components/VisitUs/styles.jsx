import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ColumnWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 0;
    align-items: center;
  }
`;

export const IconWrapper = styled.div`
  background-color: transparent;
  border-radius: 50%;
  padding: 0.5rem;
`;

export const ImageGridRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  @media (max-width: 1100px) {
    gap: 0.5rem;
  }
`

export const LeftColumn = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 2rem 4rem;
  justify-content: center;
  max-width: 45rem;

  @media (max-width: 1100px) {
    gap: 0.5rem;
    padding: 0;
    max-width: 30rem;
  }
`;

export const MarketingImageTop = styled.img`
  height: 20rem;
  width: 100%;

  @media (max-width: 700px) {
    height: 15rem;
  }
`;
export const MarketingImageBottom = styled.img`
  height: 10rem;
  width: 100%;

  @media (max-width: 700px) {
    height: 8rem;
  }
`;

export const MapWrapper = styled.div`
  padding: 0 2rem;

  @media (max-width: 1100px) {
    padding: 0;
  }
`;

export const MarketingStatementWrapper = styled.div`
  background-color: #fafcfa;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;

  @media (max-width: 1100px) {
    padding: 4rem 2rem;
    gap: 1rem;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  max-width: 50rem;

  @media (max-width: 1100px) {
    padding: 2rem 0;
    gap: 1rem;
    align-items: center;
  }
`;

export const StackItemText = styled(Typography)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const StackItemWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

export const HomeWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainerWrapper = styled(Box)`
  background-color: #00ACB1;
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%;
`;

export const MainInnerContainer = styled(Box)`
  align-items: center;
  border-radius: 3rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

export const MainOuterContainer = styled(Card)`
  align-items: center;
  background: linear-gradient(150deg, #015d67, #87e4db);
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  margin: 0 1rem 0 1rem;
  padding: 1rem;
  min-width: 70%;
`;
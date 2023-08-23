import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

export const ContactButton = styled.div`
  align-items: center;
  background-color: #00acb1;
  border-radius: 0.5rem;
  border: 2px solid #00acb1;
  color: #fefefe;
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  font-weight: 500;
  gap: 0.5rem;
  margin-top: 3rem;
  padding: 0.5rem 1.5rem;
  width: fit-content;

  &:hover {
    background-color: #01868d;
    border: 2px solid #01868d;
  }

  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
`

export const ColumnBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`

export const ColumnHeader = styled(Typography)`
  display: flex;
  border-bottom: thin solid #015D67;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  padding-bottom: 0.5rem;
`

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const LeftColumnWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Divider = styled.div`
  height: 0.1rem;
  background: #00acb1;
  margin: 0 4rem;
`;

export const FooterIconWrapper = styled.div`
  border-radius: 50%;
  border: thin solid #00ACB1;
  padding: 0.4rem;
`

export const FooterWrapper = styled.div`
  background-color: #EBF2F3;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;

  @media (max-width: 1024px) {
    padding-top: 0.5rem;
  }
`

export const FCDLogo = styled.img`
  height: 5rem;
  width: auto;
`

export const FooterLink = styled(Link)`
  &:hover {
    color: #00ACB1;
  }
`

export const LowerWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
  min-width: 100%;
  padding: 0.5rem 0.5rem 1rem 0.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.2rem;
`

export const UpperWrapper = styled.div`
  display: flex;
  gap: 5rem;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`
import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

export const ColumnBody = styled(Box)`
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

export const ColumnWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const FooterIconWrapper = styled.div`
    border-radius: 50%;
    border: thin solid #00ACB1;
    padding: 0.4rem;
`

export const FooterWraper = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color:#EBF2F3;
  padding-top:1.5rem;
`

export const IconContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
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

export const LowerBox = styled(Box)`
  display: flex;
  max-width: full;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  border-top: thin solid #FAFCFC;
  background-color: #D5E4E6;
`

export const LowerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
  min-width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`

export const UpperBox = styled(Box)`
  display: flex;
  padding: 1rem;
  gap: 5rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
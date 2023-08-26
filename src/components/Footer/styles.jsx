import styled from "@emotion/styled";
import Link from "next/link";
import { Typography } from "@mui/material";

export const ColumnBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`

export const ColumnHeader = styled(Typography)`
  border-bottom: thin solid #015D67;
  display: flex;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  padding-bottom: 0.5rem;
`

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const Divider = styled.div`
  background: #00acb1;
  height: 0.1rem;
  margin: 0 4rem;

  @media (max-width: 1100px) {
    margin-top: 1rem;
  }
`

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

  @media (max-width: 1100px) {
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

export const LowerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  width: 100%;

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    gap: 1rem;
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

  @media (max-width: 1100px) {
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
`
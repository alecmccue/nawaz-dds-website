import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";

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

export const FooterWraper = styled(Box)`
  display: flex;
  flex-direction: column;
`

export const IconContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export const LowerBox = styled(Box)`
  display: flex;
  max-width: full;
  padding: 0.5rem;
  border-top: thin solid #D5E4E6;
`

export const LowerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
  min-width: 100%;
`

export const UpperBox = styled(Box)`
  display: flex;
  padding: 1rem;
  gap: 5rem;
  width: 100%;
  justify-content: center;
`
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Body = styled(Typography)`
  font-size: 1.1rem;
`

export const Head = styled(Typography)`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const PrivacyPolicyInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 60rem;
`

export const PrivacyPolicyOuterWrapper = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  justify-content: center;
`
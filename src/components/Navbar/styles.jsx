import styled from "@emotion/styled";
import { MenuItem } from "@mui/material";

export const NavbarButtonsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1.25rem;
    height: 4rem;
    align-items: center;
`

export const ServicesMenuItem = styled(MenuItem)`
    padding: 0;
`

export const FcdLogoImage = styled.img`
  height: auto;
  width: 10rem;

  &:hover {
    cursor: pointer;
  }
`;
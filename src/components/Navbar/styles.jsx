import styled from "@emotion/styled";
import { MenuItem } from "@mui/material";

export const NavbarTabWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  width: 12rem;
  justify-content: center;

  &:hover {
    background-color: #ececec;
    border-bottom: 0.2rem solid #00ACB1;
  }
`

export const NavbarTabsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 4rem;
  align-items: center;
`;

export const DropdownMenuItem = styled(MenuItem)`
  padding: 0;
  width: 12rem;
`;

export const FcdLogoImage = styled.img`
  height: auto;
  width: 10rem;

  &:hover {
    cursor: pointer;
  }
`;
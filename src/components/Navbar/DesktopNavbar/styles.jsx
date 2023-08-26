import styled from "@emotion/styled";
import { MenuItem, Popper } from "@mui/material";

export const DropdownMenu = styled(Popper)`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 0 0 0.2rem 0.2rem;
  z-index: 1200;
  padding: 0.5rem 0;
`

export const DropdownMenuItem = styled(MenuItem)`
  padding: 0;
  width: 12rem;
`

export const MenuButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 0.4rem 1rem 0.4rem 1rem;
  width: 100%;
`

export const NavbarTabWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  width: 12rem;
  justify-content: center;

  &:hover {
    background-color: #ececec;
  }
`

export const NavbarTabsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 4rem;
  align-items: center;
`
import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../../styles/theme";

type MenuPopupPropsType = {
    menuItem: Array<string>
    isOpen: boolean
    setOpen: (arg: boolean) => void
}

export const MenuPopup: React.FC<MenuPopupPropsType> = (props) => {
    return (
        <StyledMenuPopup isOpen={props.isOpen} onClick={() => props.setOpen(false)}>
            <ul>
                {
                    props.menuItem.map((item, index) => (
                        <MenuItem key={index}>
                            <Link href={'#'}>
                                {item}
                            </Link>
                        </MenuItem>
                    ))
                }
            </ul>
        </StyledMenuPopup>
    );
};

const StyledMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(250, 86, 86, .8);;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: .8s;
  
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
  `}
`

const MenuItem = styled.li`
    
`
const Link = styled.a`
  color: ${theme.colors.secondary};
  font-size: 1.2rem;

  &:hover {
    color: #ef8b8b;
  }

`


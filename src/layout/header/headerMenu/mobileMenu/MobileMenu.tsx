import React, {useState} from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/theme";
import {MenuPopup} from "./menuPopup/MenuPopup";

const mobileItems = ['search', 'product', 'account',]

export const MobileMenu:React.FC = () => {
    const [open, setOpen] = useState(false)

    const onChangeBtnBurger = () => {
        setOpen(!open)
    }

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={open} onClick={onChangeBtnBurger}>
                {
                    open ?
                        <Icon iconId={'cross'} height={'40'} width={'40'} viewBox={'0 0 20 20'}/>
                        : <Icon iconId={'burger'} width={'41'} height={'29'} viewBox={'0 0 41 29'}/>
                }
            </BurgerButton>

            <MenuPopup menuItem={mobileItems} isOpen={open} setOpen={setOpen} />

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  background-color: unset;
  border: 0;
  display: none;
  cursor: pointer;
  z-index: 20;
  position: relative;
  
  @media ${theme.media.tablet} {
   display: block;
  }
`


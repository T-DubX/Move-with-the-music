import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/theme";


const Header = styled.header`
  
  padding: 34px 0;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  
  ${FlexWrapper} {
     a:first-child {
      margin-right: auto;
    }
    
    
  }
`

// menu

const Menu = styled.nav`
  margin-right: auto;

  ul {
    display: flex;
    gap: 64px;
    
    li + li::before {
      content: '';
      display: inline-block;
      width: 2px;
      height: 47px;
      opacity: 0.5;
      background-color: ${theme.colors.secondary};

      position: absolute;
      left: -32px;
    }
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }
`

const MenuItem = styled.li`
  width: 47px;
  height: 47px;
  background-color: ${theme.colors.secondary};
  border-radius: 50%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;

  position: relative;
`


export const S = {
    Header,
    Menu,
    MenuItem,
}
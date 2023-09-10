import styled from "styled-components";
import {theme} from "../../styles/theme";
import {Container} from "../../components/Container";

const Footer = styled.footer`
  background-color: ${theme.colors.primary};
  padding: 62px 0;
  
  nav {
    margin-left: auto;
    margin-right: 210px;
  }
  
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

//footer menu

const MenuList = styled.ul`
  display: flex;
  gap: 31px;
`

const Link = styled.a`
  color: ${theme.colors.secondary};
  font-size: 22px;
  font-weight: 500;
  line-height: 140%; /* 30.8px */

  &:hover {
    color: #f6c3c3;
  }
`

//social
const Social = styled.div`
  
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
`

const SocialItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 47px;
  height: 47px;
  background-color: ${theme.colors.secondary};
  border-radius: 50%;
  
  cursor: pointer;
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  svg use{
    stroke: ${theme.colors.fontSecondary};
  }
  
  &:hover {
    background-color: ${theme.colors.primary};
    svg use {
      stroke: #FFF;
    }
  }
`

export const S = {
    Footer,
    MenuList,
    Link,
    Social,
    SocialList,
    SocialItem
}
import styled from "styled-components";
import mainBg from '../../../assets/images/main-bg.svg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/theme";
import {font} from "../../../styles/Common";
import {Container} from "../../../components/Container";

const Main = styled.section`
  background: linear-gradient(75deg, #FF9292 -7.33%, #DE5150 90.21%);
  padding: 158px 0 144px;
  
 
  
  @media ${theme.media.tablet} {
    ${Container} ${FlexWrapper}:first-child {
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px
    }
  }
  
  @media ${theme.media.mobile} {
    padding: 150px 0 100px;
  }
  
`
// left main

const MainImgWrapper = styled.div`
  position: relative;
  
  div {
    background-image: url(${mainBg});
    background-repeat: no-repeat;
    background-size: contain;
    max-width: 812px;
    min-height: 632px;
    z-index: 1;
    
    
    position: absolute;
    top: -50px;
    left: -150px;
    right: -80px;
    bottom: 0;
  }
  
  img {
    z-index: 2;
    position: relative;
    max-width: 570px;
    min-width: 350px;
    //width: 100%;
  }
  
  @media ${theme.media.desktopMini} {
    img {
      width: 100%;
    }
  }
  
  @media ${theme.media.tablet} {
    img {
      max-width: 450px;
    }
  }
`

// slogan right main

const SloganWrapper = styled.div`
  max-width: 517px;

  @media ${theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2:nth-child(2) {
      text-align: center;
    }
  }
`

const SmallSlogan = styled.h2`
  line-height: 140%; /* 30.8px */
  letter-spacing: 2.2px;
  text-transform: uppercase;
  margin-bottom: 3px;
  
  ${font({color: `${theme.colors.secondary}`, weight: 500, Fmax: 22, Fmin: 18})};
`

const BigSlogan = styled.h2`
  line-height: 100%; /* 99.17px */
  text-transform: uppercase;
  margin-bottom: 45px;
  
  ${font({color: `${theme.colors.secondary}`, weight: 700, Fmax: 99, Fmin: 60})}
`

const Discount = styled.span`
  position: relative;
  
  ${font({color: `${theme.colors.secondary}`, weight: 700, Fmax: 44, Fmin: 28})}

  &::after {
    content: '';
    display: inline-block;
    height: 57px;
    width: 2px;
    background-color: ${theme.colors.secondary};
    position: absolute;
    right: -30px;
    top: -2px;
    bottom: 0;
  }
`

const Price = styled.span`
  color: ${theme.colors.secondary};
  font-size: 31px;
  font-weight: 500;
  line-height: 140%; /* 43.4px */
  text-decoration: line-through;
  ${font({color: `${theme.colors.secondary}`, weight: 500, Fmax: 31, Fmin: 16})}
  
  opacity: .7;
  
  }
`

const BtnBuy = styled.a`
  margin-top: 35px;
  display: inline-block;
  text-transform: uppercase;

  color: ${theme.colors.fontSecondary};
  font-size: 22px;
  font-weight: 500;

  padding: 15px 30px;
  border-radius: 62px;
  background-color: ${theme.colors.secondary};
`




export const S = {
    Main,
    MainImgWrapper,
    SloganWrapper,
    SmallSlogan,
    BigSlogan,
    Price,
    Discount,
    BtnBuy
}
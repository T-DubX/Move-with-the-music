import styled from "styled-components";
import mainBg from '../../../assets/images/main-bg.svg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/theme";

const Main = styled.section`
  background: linear-gradient(75deg, #FF9292 -7.33%, #DE5150 90.21%);
  padding: 158px 0 144px;
  
`
// left main

const MainImgWrapper = styled.div`
  position: relative;
  
  div {
    background-image: url(${mainBg});
    background-repeat: no-repeat;
    background-size: contain;
    width: 812px;
    height: 632px;
    z-index: 1;
    
    
    position: absolute;
    top: -50px;
    left: -155px;
    right: 0;
    bottom: 0;
  }
  
  img {
    z-index: 2;
    position: relative;
  }
`

// slogan right main

const SloganWrapper = styled.div`
  
`

const SmallSlogan = styled.h2`
  color: ${theme.colors.secondary};
  font-size: 22px;
  font-weight: 500;
  line-height: 140%; /* 30.8px */
  letter-spacing: 2.2px;
  text-transform: uppercase;
  margin-bottom: 3px;
`

const BigSlogan = styled.h2`
  color: ${theme.colors.secondary};
  font-size: 99.17px;
  font-weight: 700;
  line-height: 100%; /* 99.17px */
  text-transform: uppercase;
  margin-bottom: 45px;
`

const Discount = styled.span`
  color: ${theme.colors.secondary};

  /* Subtitle / Base */
  font-size: 44px;
  font-weight: 700;
  position: relative;

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
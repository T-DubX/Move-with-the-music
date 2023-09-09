import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import headphonesBg from "../../../assets/images/headphones-bg.svg";
import headphonesBefore from "../../../assets/images/headphones-before.svg";
import headphonesAfter from "../../../assets/images/headphones-after.svg";
import {theme} from "../../../styles/theme";

const Сharacteristics = styled.section`
  margin-bottom: 130px;
  
  ${Container} {
    display: flex;
    gap: 187px;
    justify-content: space-between;
  }
`

const Description = styled.div`
    ${SectionTitle} {
      max-width: 460px;
      margin-bottom: 60px;
    }
`

const WrapperImg = styled.div`
  background-image: url(${headphonesBg});
  background-repeat: no-repeat;
  position: relative;
  width: 308px;
  height: 355px;
  
  div {
    position: absolute;
    left: -140px;
    top: 70px;
  }
  
  div::before {
    content: '';
    display: inline-block;
    background-image: url(${headphonesBefore});
    background-repeat: no-repeat;
    width: 166px;
    height: 160px;

    position: absolute;
    left: -120px;
    bottom: -55px;
  }

  div::after {
    content: '';
    display: inline-block;
    background-image: url(${headphonesAfter});
    background-repeat: no-repeat;
    width: 199px;
    height: 205px;

    position: absolute;
    bottom: -30px;
    right: -125px;
  }
`

// Сharacteristic

const WrapperProgressBar = styled.div`
  width: 98px;
  height: 98px;
`

const WrapperIcon = styled.div`
  border-radius: 50%;
  width: 69px;
  height: 69px;
  border: 1px solid rgba(253, 216, 216, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-6px);
`

const Characteristic = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  
  ${WrapperProgressBar} {
    .Characteristic__WrapperProgressBar-cifKIB {
      width: 98px;
      height: 98px;
    }
  }

`

const CharacteristicDescription = styled.div`
  
`

const Title = styled.h4`
  color: ${theme.colors.fontPrimary};

  font-size: 31px;
  font-weight: 500;
  line-height: 140%; /* 43.4px */
`

const Text = styled.p `
  color: ${theme.colors.fontPrimary};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  opacity: .7;
  margin: 5px 0 10px;
`

const Link = styled.a`
  color: ${theme.colors.fontSecondary};
  font-size: 16px;
  font-weight: 500;
  line-height: 150%; /* 24px */
  
  &:hover {
    text-decoration: underline;
    color: ${theme.colors.primary};
  }
`

export const S = {
    Сharacteristics,
    Description,
    WrapperImg,
    WrapperProgressBar,
    WrapperIcon,
    Characteristic,
    CharacteristicDescription,
    Text,
    Title,
    Link
}
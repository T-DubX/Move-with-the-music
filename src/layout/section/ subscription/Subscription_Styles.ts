import styled from "styled-components";
import {Container} from "../../../components/Container";
import subscribeBg from "../../../assets/images/subscribeBg.svg";
import {theme} from "../../../styles/theme";

const Subscription = styled.section`
  margin-bottom: 130px;
  
  ${Container} {
    display: flex;
    justify-content: center;
    background-image: url(${subscribeBg});
    background-repeat: no-repeat;
  }
`

const Subscribe = styled.div`
  padding: 54px 105px;
  border-radius: 20px;
  background: #FFF4F4;
  transform: translateY(30px);
`

const Text = styled.p`
    margin: 6px 0 36px;
  text-align: center;
`

const WrapperEmail = styled.div`
  position: relative;
  
`

const Email = styled.input`
  width: 503px;
  padding: 15px 30px;
  border-radius: 73px;
  background: #FFF;
  border: 0;
  font-size: 18px;
  line-height: 150%;
  
  &::placeholder {
    color: ${theme.colors.fontPrimary};
    font-size: 18px;
    line-height: 150%; /* 27px */
    opacity: .3;
  }
  &:focus-visible {
    outline: 1px solid ${theme.colors.fontPrimary};
  }
`

const Button = styled.button`
  border-radius: 50px;
  background: #FF4948;
  padding: 15px 30px;
  border: 0;
  cursor: pointer;

  color: #FFF;
  font-size: 22px;
  font-weight: 500;
  line-height: 140%; /* 30.8px */

  position: absolute;
  right: -3px;
  top: -1px;
`

export const S = {
    Subscription,
    Subscribe,
    Text,
    WrapperEmail,
    Email,
    Button
}
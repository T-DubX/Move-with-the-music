import styled from "styled-components";
import {Container} from "../../../components/Container";

const HeadphoneСomponents = styled.section`
  margin-bottom: 152px;
  
  ${Container} {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`

const WrapperComponents = styled.div`
  max-width: 390px;
  transform: translateY(-35px);
`

//components


const Components = styled.ul`
  margin-top: 48px;

  li + li:before {
    content: '';
    display: inline-block;
    width: 292px;
    height: 1px;
    background: #000;
    opacity: .1;
    position: absolute;
    top: -20px;
    left: 0;
  }
  
  li + li {
    margin-top: 40px;
  }
`

const Component = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 20px;
  position: relative;

  color: #000;
  font-size: 22px;
  line-height: 140%; /* 30.8px */
`

export const S = {
    HeadphoneСomponents,
    WrapperComponents,
    Components,
    Component
}
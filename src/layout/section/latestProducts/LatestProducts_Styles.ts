import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";

const LatestProducts = styled.section`
  margin-bottom: 130px;
  
  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Description = styled.p`
  margin: 25px 0 93px;
  max-width: 557px;
  text-align: center;

  color: ${theme.colors.fontPrimary};

  line-height: 150%; /* 24px */
`

// products

const Products = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const ProductImg = styled.div<{bg?: string,}>`
  background-color: ${props => props.bg};
  border-radius: 30px;
  width: 332px;
  height: 332px;
  position: relative;
  
  img {
    object-fit: cover;
    position: absolute;
    top: -54px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Cart = styled.div<{bg: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 78px;
  height: 78px;
  border: 6px solid #FFF;
  border-radius: 50%;
  background-color: ${props => props.bg};

  position: absolute;
  right: -78px;
  top: -78px;
  transform: translate(-50%, 50%);
`

const Raiting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0 16px;
  
  span {
    color: ${theme.colors.fontPrimary};
    font-weight: 500;
    line-height: 150%; /* 24px */
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`

const Name = styled.span`
  color: ${theme.colors.fontPrimary};
  font-size: 22px;
  line-height: 140%; /* 30.8px */
`

const Price = styled.span`
  color: ${theme.colors.fontPrimary};

  font-size: 22px;
  font-weight: 500;
  line-height: 140%; /* 30.8px */
`

export const S = {
    LatestProducts,
    Description,
    Products,
    ProductImg,
    Cart,
    Raiting,
    Info,
    Name,
    Price
}
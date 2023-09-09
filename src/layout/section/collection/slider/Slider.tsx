import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import item1 from '../../../../assets/images/collection-item-1.png'
import item3 from '../../../../assets/images/collection-item-3.png'
import styled from "styled-components";
import './Slider.css'

const items = [
    <img src={item1} alt="section-item"/>,
    <img src={item3} alt="section-item"/>,
    <img src={item3} alt="section-item"/>,
    <img src={item3} alt="section-item"/>,
]

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

export const Slider:React.FC = () => {
    return (
        <StyledSlider>
            <AliceCarousel items={items} responsive={responsive} infinite={true} mouseTracking/>
        </StyledSlider>
    );
};
const StyledSlider = styled.div`
  max-width: 1000px;
  width: 100%;
`




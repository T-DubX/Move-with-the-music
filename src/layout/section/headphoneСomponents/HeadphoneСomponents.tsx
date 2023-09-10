import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Components} from "./components/Components";
import componentsImg from '../../../assets/images/componentsImg.png'
import {Container} from "../../../components/Container";

const component = ['5A Charger','Extra battery', 'Sophisticated bag', 'User manual guide'];

export const HeadphoneСomponents:React.FC = () => {
    return (
        <StyledHeadphoneСomponents>
            <Container>
                <img src={componentsImg} alt="headphones"/>
                <WrapperComponents>
                    <SectionTitle>
                        Whatever you get in the box
                    </SectionTitle>
                    <Components component={component}/>
                </WrapperComponents>
            </Container>
        </StyledHeadphoneСomponents>
    );
};

const StyledHeadphoneСomponents = styled.section`
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
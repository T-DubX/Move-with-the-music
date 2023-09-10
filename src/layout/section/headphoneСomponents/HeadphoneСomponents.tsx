import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Components} from "./components/Components";
import componentsImg from '../../../assets/images/componentsImg.png'
import {Container} from "../../../components/Container";
import {S} from './HeadphoneComponents_Style';

const component = ['5A Charger', 'Extra battery', 'Sophisticated bag', 'User manual guide'];

export const HeadphoneСomponents: React.FC = () => {
    return (
        <S.HeadphoneСomponents>
            <Container>
                <img src={componentsImg} alt="headphones"/>
                <S.WrapperComponents>
                    <SectionTitle>
                        Whatever you get in the box
                    </SectionTitle>
                    <Components component={component}/>
                </S.WrapperComponents>
            </Container>
        </S.HeadphoneСomponents>
    );
};


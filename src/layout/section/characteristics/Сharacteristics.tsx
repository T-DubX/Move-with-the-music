import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Characteristic} from "./characteristic/Characteristic";
import {Container} from "../../../components/Container";
import  headphonesImg from '../../../assets/images/headphones-img.png'
import { S } from './Сharacteristics_Style';

export const Сharacteristics: React.FC = () => {
    return (
        <S.Сharacteristics>
            <Container>
                <S.Description>
                    <SectionTitle>
                        Good headphones and loud music is all you need
                    </SectionTitle>
                    <FlexWrapper direction={'column'} gap={'40px'}>
                        <Characteristic icon={'battery'} title={'Battery'} description={'Battery 6.2V-AAC codec'}/>
                        <Characteristic icon={'bluetooth'} height={'35'} width={'35'} title={'Bluetooth'} description={'Battery 6.2V-AAC codec'}/>
                        <Characteristic icon={'microphone'} height={'33'} width={'33'} title={'Microphone'} description={'Battery 6.2V-AAC codec'}/>
                    </FlexWrapper>
                </S.Description>
                <S.WrapperImg>
                    <img src={headphonesImg} alt="headphonesImg"/>
                    <S.Bg />
                </S.WrapperImg>
            </Container>
        </S.Сharacteristics>
    );
};



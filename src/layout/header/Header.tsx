import React from 'react';
import { S } from './Header_Styles';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./headerMenu/menu/Menu";
import {Container} from "../../components/Container";

export const Header:React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'center'} align={'center'}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
            <div>helo</div>
        </S.Header>
    );
};

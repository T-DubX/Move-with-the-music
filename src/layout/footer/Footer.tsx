import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {FooterMenu} from "./footerMenu/FooterMenu";
import {Social} from "./social/Social";
import {Container} from "../../components/Container";
import { S } from './Footer_Styles';

const menuItem = ['Home', 'About', 'Product'];

const socialItem = [
    {
        name: 'instagram',
        width: '22',
        height: '22'
    },
    {
        name: 'twitter',
        width: '24',
        height: '20'
    },
    {
        name: 'facebook',
        width: '13',
        height: '22'
    },
];

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <Logo/>
                <FooterMenu menuItem={menuItem}/>
                <Social socialItem={socialItem}/>
            </Container>
        </S.Footer>
    );
};


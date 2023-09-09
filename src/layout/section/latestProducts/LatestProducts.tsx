import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import product1 from '../../../assets/images/Read-Headphone.png'
import product2 from '../../../assets/images/Blue-Headphone.png'
import product3 from '../../../assets/images/Green-Headphone.png'
import {Products} from "./products/Products";
import { S } from './LatestProducts_Styles';

const products = [
    {
        img: product1,
        bgColor: '#FFE5EE',
        name: 'Read Headphone',
        price: '256',
    },
    {
        img: product2,
        bgColor: '#E5F1FF',
        name: 'Blue Headphone',
        price: '235',
    },
    {
        img: product3,
        bgColor: '#E5FFFB',
        name: 'Green Headphone',
        price: '245',
    },
];

export const LatestProducts: React.FC = () => {
    return (
        <S.LatestProducts>
            <Container>
                <SectionTitle>
                    Our Latest Product
                </SectionTitle>
                <S.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis nunc ipsum aliquam, ante.
                </S.Description>
                <Products products={products}/>
            </Container>
        </S.LatestProducts>
    );
};



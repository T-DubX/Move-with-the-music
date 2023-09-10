import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import { S } from './Subscription_Styles';

export const Subscription: React.FC = () => {
    return (
        <S.Subscription>
            <Container>
                <S.Subscribe>
                    <SectionTitle>
                        Subscribe
                    </SectionTitle>
                    <S.Text>
                        Lorem ipsum dolor sit amet, consectetur
                    </S.Text>
                    <S.WrapperEmail>
                        <S.Email type={'email'} placeholder={'Enter Your email address'}/>
                        <S.Button>
                            Subscribe
                        </S.Button>

                    </S.WrapperEmail>
                </S.Subscribe>
            </Container>
        </S.Subscription>
    );
};



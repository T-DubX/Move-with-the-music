import React from 'react';
import { S } from './Main_Styles';
import {Container} from "../../../components/Container";
import mainImg from '../../../assets/images/main-img.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} gap={'95px'}>
                    <S.MainImgWrapper>
                        <img src={mainImg} alt="phoneg"/>
                        <div></div>
                    </S.MainImgWrapper>
                    <S.SloganWrapper>
                        <S.SmallSlogan>
                            Hear it. Feel it
                        </S.SmallSlogan>
                        <S.BigSlogan>
                            Move with the music
                        </S.BigSlogan>
                        <FlexWrapper gap={'60px'} align={'center'}>
                            <S.Discount>
                                $ 435
                            </S.Discount>
                            <S.Price>
                                $ 465
                            </S.Price>
                        </FlexWrapper>
                        <S.BtnBuy>
                            buy now
                        </S.BtnBuy>
                    </S.SloganWrapper>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


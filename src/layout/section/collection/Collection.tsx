import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Slider} from "./slider/Slider";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";

export const Collection: React.FC = () => {
    return (
        <StyledCollection>
            <Container>
                <SectionTitle>
                    Our Latest<br/>
                    colour collection 2021
                </SectionTitle>
                <Slider/>
            </Container>
        </StyledCollection>
    );
};

const StyledCollection = styled.section`
  margin: 130px 0 190px;
  
  ${Container} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 70px;
  }
  
  @media ${theme.media.tablet} {
    margin: 130px 0 120px;
  }
`


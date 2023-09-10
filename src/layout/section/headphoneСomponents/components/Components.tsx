import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type ComponentsPropsType = {
    component : Array<string>
}

export const Components:React.FC<ComponentsPropsType> = (props) => {
    return (
        <StyledComponents>
            {
                props.component.map((c, index) => (
                    <Component>
                       <Icon iconId={'arrow'} width={'23'} height={'22'} viewBox={'0 0 23 23'}/> {c}
                    </Component>
                ))
            }
        </StyledComponents>
    );
};

const StyledComponents = styled.ul`
  margin-top: 48px;

  li + li:before {
    content: '';
    display: inline-block;
    width: 292px;
    height: 1px;
    background: #000;
    opacity: .1;
    position: absolute;
    top: -20px;
    left: 0;
  }
  
  li + li {
    margin-top: 40px;
  }
`

const Component = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 20px;
  position: relative;

  color: #000;
  font-size: 22px;
  line-height: 140%; /* 30.8px */
`
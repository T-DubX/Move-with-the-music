import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import { S } from '../HeadphoneComponents_Style';

type ComponentsPropsType = {
    component : Array<string>
}

export const Components:React.FC<ComponentsPropsType> = (props) => {
    return (
        <S.Components>
            {
                props.component.map((c, index) => (
                    <S.Component key={index}>
                       <Icon iconId={'arrow'} width={'23'} height={'22'} viewBox={'0 0 23 23'}/> {c}
                    </S.Component>
                ))
            }
        </S.Components>
    );
};


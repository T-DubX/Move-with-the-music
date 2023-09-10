import React from 'react';
import { S } from '../../Header_Styles';
import {Icon} from "../../../../components/icon/Icon";


type MenuPropsType = {
    menuItem: Array<string>
}

export const Menu: React.FC<MenuPropsType> = (props) => {
    return (
        <S.Menu>
            <ul>
                {
                    props.menuItem.map((item, index) => (
                        <S.MenuItem key={index}>
                            <Icon iconId={item} width={''} height={''} viewBox={''}/>
                        </S.MenuItem>
                    ))
                }
            </ul>
        </S.Menu>
    );
};


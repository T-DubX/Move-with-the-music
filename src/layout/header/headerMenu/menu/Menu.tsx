import React from 'react';
import { S } from '../../Header_Styles';
import {Icon} from "../../../../components/icon/Icon";

const items = ['search', 'shop', 'person'];

export const Menu: React.FC = () => {
    return (
        <S.Menu>
            <ul>
                {
                    items.map((item, index) => (
                        <S.MenuItem key={index}>
                            <Icon iconId={item} width={''} height={''} viewBox={''}/>
                        </S.MenuItem>
                    ))
                }
            </ul>
        </S.Menu>
    );
};


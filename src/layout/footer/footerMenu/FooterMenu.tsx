import React from 'react';
import { S } from '../Footer_Styles';

type FooterMenuPropsType = {
    menuItem: Array<string>
}

export const FooterMenu:React.FC<FooterMenuPropsType> = (props) => {
    return (
        <nav>
            <S.MenuList>
                {
                 props.menuItem.map((item, index) => (
                     <li key={index}>
                         <S.Link href="#">
                             {item}
                         </S.Link>
                     </li>
                 ))
                }
            </S.MenuList>
        </nav>
    );
};




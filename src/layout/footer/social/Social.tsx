import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import { S } from '../Footer_Styles';

type SocialPropsType = {
    socialItem: Array<{name: string, width: string, height: string}>
}

export const Social: React.FC<SocialPropsType> = (props) => {
    return (
        <S.Social>
            <S.SocialList>
                {
                    props.socialItem.map((item, index) => (
                        <S.SocialItem>
                            <a href="#">
                                <Icon iconId={item.name} width={item.width} height={item.height} viewBox={`0 0 ${item.width} ${item.height}`}/>
                            </a>
                        </S.SocialItem>
                    ))
                }
            </S.SocialList>
        </S.Social>
    );
};


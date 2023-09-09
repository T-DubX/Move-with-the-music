import React from 'react';
import {CircularProgressbarWithChildren} from "react-circular-progressbar";
import {Icon} from "../../../../components/icon/Icon";
import { S } from '../Сharacteristics_Style';


type CharacteristicPropsType = {
    icon: string
    width?: string
    height?: string
    title: string
    description: string
}
export const Characteristic:React.FC<CharacteristicPropsType> = (props) => {
    return (
        <S.Characteristic>

            <S.WrapperProgressBar >
                <CircularProgressbarWithChildren value={50} strokeWidth={6}  styles={{
                    path: {
                        // Path color
                        stroke: `#FF4948`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Rotate the path
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    trail: {
                        // Trail color
                        stroke: 'rgba(246, 128, 128, .5)',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Rotate the trail
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                }}>
                    <S.WrapperIcon>
                        <Icon iconId={props.icon} width={props.width || '35'} height={props.height || '26'} viewBox={`0 0 ${props.width} ${props.height}`} />
                    </S.WrapperIcon>
                </CircularProgressbarWithChildren>
            </S.WrapperProgressBar>
            <S.CharacteristicDescription>
                <S.Title>
                    {props.title}
                </S.Title>
                <S.Text>
                    {props.description}
                </S.Text>
                <S.Link>
                    Lern More
                </S.Link>
            </S.CharacteristicDescription>


        </S.Characteristic>
    );
};




import React from 'react';
import iconSprite from '../../assets/images/iconSprite.svg'

type IconPropsType = {
    iconId : string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon:React.FC<IconPropsType> = ({iconId, width, height, viewBox}) => {
    return (
        <svg width={width || '20'} height={height || '20'} viewBox={viewBox || '0 0 20 20'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${iconId}`}></use>
        </svg>
    );
};


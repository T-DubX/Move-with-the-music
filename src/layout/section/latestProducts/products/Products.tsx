import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import { S } from '../LatestProducts_Styles';

type ProductsPropsType = {
    products: Array<{img: string, bgColor: string, name: string, price: string}>
}

export const Products:React.FC<ProductsPropsType> = (props) => {
    return (
        <S.Products>
            {
                props.products.map((prod, index) => (
                   <FlexWrapper direction={'column'}>
                       <S.ProductImg bg={prod.bgColor}>
                           <img src={prod.img} alt={prod.name}/>
                           <S.Cart bg={prod.bgColor}>
                               <Icon iconId={'cart'} height={'31'} width={'31'} viewBox={'0 0 31 31'}/>
                           </S.Cart>
                       </S.ProductImg>
                       <S.Raiting>
                           <FlexWrapper gap={'10px'}>
                               <Icon iconId={'star'} width={'32'} height={'30'} viewBox={'0 0 30 30'}/>
                               <Icon iconId={'star'} width={'32'} height={'30'} viewBox={'0 0 30 30'}/>
                               <Icon iconId={'star'} width={'32'} height={'30'} viewBox={'0 0 30 30'}/>
                               <Icon iconId={'star'} width={'32'} height={'30'} viewBox={'0 0 30 30'}/>
                               <Icon iconId={'star'} width={'32'} height={'30'} viewBox={'0 0 30 30'}/>
                           </FlexWrapper>
                           <span>
                               4.50
                           </span>
                       </S.Raiting>
                       <S.Info>
                           <S.Name>
                               {prod.name}
                           </S.Name>
                           <S.Price>
                               $ {prod.price}
                           </S.Price>
                       </S.Info>
                   </FlexWrapper>

                ))
            }

        </S.Products>
    );
};


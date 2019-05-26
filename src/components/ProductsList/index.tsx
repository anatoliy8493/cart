import React, { ReactNode } from 'react';

import * as S from './styles';

interface Props {
  children: ReactNode;
}

const ProductsList: React.FC = ({ children }: Props) => (
  <S.ProductsList>
    {children}
  </S.ProductsList>
)

export default ProductsList;

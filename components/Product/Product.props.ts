import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ProductModel } from '../../interfaces/product';

export interface ProductProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel
}

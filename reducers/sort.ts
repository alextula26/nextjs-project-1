import { SortEnum } from '../components/Sort/Sort.props';
import { ProductModel } from '../interfaces/product';

export type SortAction = { type: SortEnum.Price } | { type: SortEnum.Rating };
export type AddProduct = { type: 'AddProduct', products: ProductModel[] };

type ActionType = SortAction | AddProduct;

export interface SortReducerState {
  sort: SortEnum
  products: ProductModel[]
}

export const sortReducer = (state: SortReducerState, action: ActionType): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => a.price > b.price ? -1 : 1),
      };
    case 'AddProduct':
      return {
        sort: state.sort,
        products: action.products,
      };
    default:
      throw new Error('Неверный тип сортировки');
  }
};

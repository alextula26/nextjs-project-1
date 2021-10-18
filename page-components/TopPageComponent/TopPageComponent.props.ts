import { TopLevelCategory, TopPageModel } from '../../interfaces/page';
import { ProductModel } from '../../interfaces/product';

export interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

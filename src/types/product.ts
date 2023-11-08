import { ProductCategory, ProductType } from '../const';

export type TProductCardSmall = {
    id: string;
    title: string;
    category: ProductCategory;
    type: ProductType;
    price: number;
    previewImage: string;
    previewImageWebp: string;
    isFavorite: boolean;
    isNew: boolean;
};

export type TProductCardSmallList = TProductCardSmall[]

export type TProduct = {
  id: string;
  title: string;
  category: ProductCategory;
  type: ProductType;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
  description: string;
  images: [string];
  weight: number;
  rating: number;
  reviewCount: number;
  }

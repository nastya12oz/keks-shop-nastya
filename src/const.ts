import { TShops } from './types/map';

export const BACKEND_URL = 'https://grading.design.pages.academy/v0/keks';
export const REQUEST_TIMEOUT = 5000;
export const STARS_COUNT = 5;
export const USER_EMAIL_KEY_NAME = 'Email';
export const USER_AVATAR_KEY_NAME = 'avatar-url';
export const REGISTRATION_NAME_MIN_LENGTH = 1;
export const PASSWORD_MIN_LENGTH = 2;
export const AVATAR_TYPES = ['jpg', 'png'];
export const DISPLAYED_PRODUCTS_COUNT = 6;
export const REVIEW_MAX_LENGTH = 500;
export const DISPLAYED_REVIEWS_COUNT = 2;
export const SHOP_MAP_URL = 'img/content/map-marker2.svg';
export const PRODUCTION_MAP_URL = 'img/content/map-marker1.svg';


export enum ProductCategory {
  Bisque = 'bisque',
  Cheesecake = 'cheesecake',
  Shortbread = 'shortbread',
  Dessert = 'dessert',
}

export enum ProductType {
  Chocolate = 'chocolate',
  Vanilla = 'vanilla',
  Vegetarian = 'vegetarian',
  HoneyCake = 'honey-cake',
  Lemon = 'lemon',
  NewYork = 'new-york',
  Tart = 'tart',
  FunnelCake = 'funnel-cake',
  BasketCake = 'basket-cake',
  ChocolateMuffin = 'chocolate-muffin',
  BrandMuffin = 'brand-muffin'
}

export enum AppRoute {
  Main = '/',
  LogIn = '/logIn',
  SignUp = '/SignUp',
  Catalog = '/Catalog',
  Favorites = '/Favorites',
  Product = '/products/:id',
}

export enum APIRoute {
  Products = '/products',
  Categories = '/categories',
  Product = '/products/',
  Favorites = '/favorites',
  Login = 'users/login',
  Registration = 'users/registration',
  Logout = 'users/logout',
  Avatar = 'users/upload',
  LastReview = 'reviews/getLast',
  Review = '/reviews/',
}

export enum NameSpace {
  Products = 'PRODUCTS',
  User = 'USER',
  Reviews = 'REVIEWS',
  Filters = 'FILTERS',
  Favorites = 'FAVORITES'
}

export const DateFormat = {
  FULL_DATE_FORMAT: 'YYYY-MM-DD',
  DATE_FORMAT: 'DD.MM',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}


export const SweetShops: TShops = {
  FIRST_SHOP: {
    name: 'Кондитерская 1',
    addressCoordinates: [59.970969, 30.316252],
    address: 'ул. Профессора Попова, 9-15',
  },
  SECOND_SHOP: {
    name: 'Кондитерская 2',
    addressCoordinates: [59.967947, 30.274708],
    address: 'Спортивная площадка, д. 10, литер А, пом. 428, Вязовая ул.',
  },
  PRODUCTION: {
    name: 'Производство',
    addressCoordinates: [59.960380, 30.308725],
    address: 'ул. Ленина, 10-8',
  },
};

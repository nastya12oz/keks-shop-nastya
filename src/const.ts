export const BACKEND_URL = 'https://grading.design.pages.academy/v0/keks';
export const REQUEST_TIMEOUT = 5000;

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
  Product = '/ProductPage/:id',
}

export enum APIRoute {
  Products = '/products',
  Categories = '/categories',
  Product = '/products/:id',
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
  Reviews = 'REVIEWS'
}

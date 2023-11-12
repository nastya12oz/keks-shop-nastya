export type TShopAddress = {
  name: string;
  addressCoordinates: [number, number];
  address: string;
};

export type TShops = {
  FIRST_SHOP: TShopAddress;
  SECOND_SHOP: TShopAddress;
  PRODUCTION: TShopAddress;
}

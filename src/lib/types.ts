export interface IProduct {
  id: IDType;
  name: string;
  price: number;
  qty: number;
};

export type IDType = string | number;

export interface ICartItem {
  id: IDType;
  qty: number;
}

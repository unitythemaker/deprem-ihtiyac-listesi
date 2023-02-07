export interface IProduct {
  id: IDType;
  name: string;
  qty: number;
};

export type IDType = string | number;

export interface ICartItem {
  id: IDType;
  qty: number;
}

export interface IUserData {
  name: string;
  phone: string;
  desc: string;
  addr: string;
  city: string;
  people?: number;
}
export interface IProduct {
  id: IDType;
  name: string;
  img: string;
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
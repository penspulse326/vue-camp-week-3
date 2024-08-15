export interface IMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface ICartItem extends IMenuItem {
  quantity: number;
}

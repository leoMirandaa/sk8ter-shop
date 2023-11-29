export interface Product {
  _id?: string;
  name: string;
  description?: string;
  price: number | any;
  img?: Img | any;
  status?: boolean;
  category?: boardType | any; //pennyboard,skateboard,longboard
  // inStock: number;
  // user: object;
}

interface Img {
  public_id: string;
  url: string;
}

export enum boardType {
  PENNYBOARD = 1,
  SKATEBOARD = 2,
  LONGBOARD = 3,
}

interface Category {
  _id: string;
  name: string;
}

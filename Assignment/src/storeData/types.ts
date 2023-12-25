export interface Product {
  id: number;
  name: string;
  price: number;
  description:String;
}

export interface RequestWithTimestamp extends Request {
  timestamp: number;
}

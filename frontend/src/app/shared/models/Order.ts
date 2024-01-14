import { CartItem } from "./CartItem";

export class Order {
    _id!: string;
    items!: CartItem[];
    totalPrice!: number;
    name!: string;
    address!: string;
    paymentId!: string;
    createdId!: string;
    status!: string;
}
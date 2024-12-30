export interface CardData {
    image: string;
    name: string;
    price: string
    mrp?: string;
    ratings?: number;
    isLiked: boolean;
    discount?: number
    isDiscount?: boolean,
    uuid: string
}
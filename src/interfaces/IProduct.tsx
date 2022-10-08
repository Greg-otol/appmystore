export interface IProduct {
    id?: string,
    name: string,
    categoryName?: string,
    description?: string,
    price: number,
    imageUrl?: string,
    hasStock?: boolean,
    active?: boolean
}
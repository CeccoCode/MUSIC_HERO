
export class Product {
    _id: string;
    title!: string;
    description: string;
    price!: number;
    images: string[] = [];
    category: string;
    favorite?: Boolean;

    constructor(_id: string, title: string, description: string, price: number, images: string[], category: string, favorite: boolean) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.images = images;
        this.category = category;
        this.favorite = favorite;
    }
}
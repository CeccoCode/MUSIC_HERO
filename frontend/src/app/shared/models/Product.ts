
export class Product {
    title!: String;
    description: String;
    price!: Number;
    images: String[] = [];
    category: String;

    constructor(title: string, description: string, price: Number, images: string[], category: string) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.images = images;
        this.category = category;
    }
}
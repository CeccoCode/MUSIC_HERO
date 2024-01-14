export class Category {
    _id!: string;
    name!: string;
    parent: Category | null;
    imageUrl: string;

    constructor(_id: string, name: string, parent: Category | null, imageUrl: string) {
        this._id = _id;
        this.name = name;
        this.parent = parent;
        this.imageUrl = imageUrl;
    }
}
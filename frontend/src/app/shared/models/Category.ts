export class Category {
    name!: string;
    parent: Category | null;
    imageUrl: string;

    constructor(name: string, parent: Category | null, imageUrl: string) {
        this.name = name;
        this.parent = parent;
        this.imageUrl = imageUrl;
    }
}
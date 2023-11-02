export class Category {
    name!: string;
    parent: Category | null;
    properties: object[];
    imageUrl: string;

    constructor(name: string, parent: Category | null, properties: object[], imageUrl: string) {
        this.name = name;
        this.parent = parent;
        this.properties = properties;
        this.imageUrl = imageUrl;
    }
}
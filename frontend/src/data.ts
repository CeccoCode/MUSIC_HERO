import { Category } from "../../frontend/src/app/shared/models/Category";
import { Product } from "../../frontend/src/app/shared/models/Product";


export const sample_category: Category[] = [
    {
        name: 'Strumenti a Corda',
        parent: null,
        properties: [],
        imageUrl: 'assets/chitarra.jpg',
    },
    {
        name: 'Strumenti a Fiato',
        parent: null,
        properties: [],
        imageUrl: 'assets/trumpet.jpg',
    },
    {
        name: 'Tastiere Piano',
        parent: null,
        properties: [],
        imageUrl: 'assets/piano.jpg',
    },
    {
        name: 'Percussioni',
        parent: null,
        properties: [],
        imageUrl: 'assets/percussione.jpg',
    },
    {
        name: 'Accessori',
        parent: null,
        properties: [],
        imageUrl: 'assets/accessori.jpg',
    },
    {
        name: 'Strumenti per registrazione',
        parent: null,
        properties: [],
        imageUrl: 'assets/registrazione.jpg',
    },
    {
        name: 'Libri e Spartiti',
        parent: null,
        properties: [],
        imageUrl: 'assets/spartiti.jpg',
    },
]


export const sample_product: Product[] = [
    {
        title: 'Chitarra lavami',
        description: "sono un prodotto ottimo",
        price: 3,
        images: ['assets/chitarra.jpg'],
        category: '',
    },

]
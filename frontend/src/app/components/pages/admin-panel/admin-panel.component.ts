import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/shared/models/Category';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  imagePaths: string = '';
  newProduct: Product = { // Initialize newProduct with default values
    _id: '',
    title: '',
    description: '',
    price: 0,
    images: [],
    category: ''
  };
  constructor(private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.categoryService.getAllParent().subscribe((serverCategories) => {
      this.categories = serverCategories;
    });
  }

  loadProducts(): void {
    this.productService.getAll().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  addProduct(): void {
    // Converti imagePaths in un array di stringhe
    const imageArray = this.imagePaths.split(',').map(path => path.trim());
    this.newProduct.images = imageArray;

    // Invia il prodotto al backend senza includere _id
    const { _id, ...productData } = this.newProduct;
    this.productService.addProduct(this.newProduct).subscribe({
      next: (product) => {
        this.products.push(product);
        // Resetta il form
        this.newProduct = {
          _id: '',
          title: '',
          description: '',
          price: 0,
          images: [],
          category: ''
        };
        this.imagePaths = ''; // Resetta anche i percorsi delle immagini
      },
      error: (error) => {
        console.error('Error adding product', error);
      }
    });
  }
  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter(product => product._id !== productId); // Rimuovi il prodotto eliminato dall'elenco
        // Mostra un messaggio di successo o aggiorna la vista
      },
      error: (error) => {
        console.error('Error deleting product', error);
        // Gestisci l'errore, ad esempio mostrando un messaggio all'utente
      }
    });
  }
}




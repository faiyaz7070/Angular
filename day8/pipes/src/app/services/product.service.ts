import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Dummy data for demonstration purposes
  private products: Product[] = [
    { name: 'Product 1', category: 'Category A', price: 10, quantity: 5 },
    { name: 'Product 2', category: 'Category B', price: 15, quantity: 10 },
    { name: 'Product 3', category: 'Category C', price: 20, quantity: 8 },
  
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}

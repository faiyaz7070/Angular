import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products: Product[] = [
    { id: 1, productName: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, productName: 'Smartphone', price: 800, category: 'Electronics' },
    { id: 3, productName: 'Headphones', price: 150, category: 'Electronics' },
    { id: 4, productName: 'Desk', price: 300, category: 'Furniture' },
    { id: 5, productName: 'Chair', price: 100, category: 'Furniture' }
  ];

  constructor() { }

  getproductdata(): Observable<Product[]> {
    return of(this.products);
  }

  getproductdetail(id: number): Observable<Product | null> {
    return of(this.products.find(product => product.id === id) || null);
  }
}

import { Component } from '@angular/core';


export class Product {
  constructor(public name: string, public price: number, public available: boolean) {}
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] 
})
export class ProductsComponent {
  products: Product[] = [
    { name: 'Laptop', price: 1200, available: true },
    { name: 'Smartphone', price: 800, available: true },
    { name: 'Headphones', price: 100, available: false },
    { name: 'Camera', price: 600, available: true },
    { name: 'Tablet', price: 300, available: false },
    { name: 'Fitness Tracker', price: 50, available: true },
    { name: 'Bluetooth Speaker', price: 80, available: true },
    { name: 'Gaming Console', price: 400, available: false },
    { name: 'Smartwatch', price: 150, available: true },
    { name: 'External Hard Drive', price: 120, available: true }
  ];
  searchQuery: string = '';

  get filteredProducts(): Product[] {
    const query = this.searchQuery.trim().toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }

 
}

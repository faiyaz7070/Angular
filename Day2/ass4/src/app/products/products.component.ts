import { Component } from '@angular/core';

// Remove @Component decorator from Product class
export class Product {
  constructor(public name: string, public price: number, public available: boolean) {}
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Corrected style URL to styleUrls
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
  
}

import { Component, Input } from '@angular/core';
export class Product {
  constructor(
    public name: string,
    public price: number,
    public available: boolean
  ) {}
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() products: Product[] = [];
  fontSizeThreshold: number = 1000;

  constructor() { }

  isPriceHigh(price: number): boolean {
    return price > this.fontSizeThreshold;
  }
}

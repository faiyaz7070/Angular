import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  sortBy: keyof Product | '' = ''; // Define type for sortBy
  sortOrder: string = 'asc'; // Default sort order

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  sortProducts(criteria: keyof Product): void {
    if (this.sortBy === criteria) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = criteria;
      this.sortOrder = 'asc';
    }

    // Sorting logic
    this.products.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a[criteria] < b[criteria] ? -1 : 1;
      } else {
        return a[criteria] > b[criteria] ? -1 : 1;
      }
    });
  }
}

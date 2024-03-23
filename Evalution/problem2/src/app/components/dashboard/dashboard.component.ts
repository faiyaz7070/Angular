import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  search: string = '';
  sort: string = 'price';
  sortOrder: string = 'asc';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getproductdata().subscribe(products => {
      this.products = products;
    });
  }

  toggle(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}

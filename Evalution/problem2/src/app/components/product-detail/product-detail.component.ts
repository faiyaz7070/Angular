import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getproductdetail();
  }

  getproductdetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getproductdetail(id).subscribe(product => {
      this.product = product || undefined;
    });
  }
}

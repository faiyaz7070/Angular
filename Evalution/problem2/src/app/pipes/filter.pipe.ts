import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    if (!products || !search) {
      return products;
    }

    return products.filter(product =>
      product.productName.toLowerCase().includes(search.toLowerCase())
    );
  }
}

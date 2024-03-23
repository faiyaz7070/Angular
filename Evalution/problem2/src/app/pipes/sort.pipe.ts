import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(products: Product[] | null, sort: string, sortOrder: string): Product[] | null {
    if (!products || !sort|| !sortOrder) {
      return products;
    }

    return products.sort((a, b) => {
      const aValue = (a as any)[sort];
      const bValue = (b as any)[sort];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
    });
  }
}

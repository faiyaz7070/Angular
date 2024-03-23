export class Product {
    id: number;
    productName: string;
    price: number;
    category: string;
  
    constructor(id: number, productName: string, price: number, category: string) {
      this.id = id;
      this.productName = productName;
      this.price = price;
      this.category = category;
    }
  }
  
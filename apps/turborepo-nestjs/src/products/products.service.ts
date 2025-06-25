import { Injectable } from '@nestjs/common';
import { CreateProductRequest, Product } from '@repo/types';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];
  createProduct(createProductRequest: CreateProductRequest) {
    const product: Product = {
      id: Math.random().toString(36).substring(7),
      name: createProductRequest.name,
      price: createProductRequest.price,
    };

    this.products.push(product);
  }

  retrieveProducts() {
    return this.products;
  }
}

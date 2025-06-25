import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductRequest } from '@repo/types';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async createProduct(@Body() body: CreateProductRequest) {
    console.log(body);

    return this.productService.createProduct(body);
  }

  @Get()
  async retrieveProducts() {
    return this.productService.retrieveProducts();
  }
}

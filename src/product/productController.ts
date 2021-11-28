import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/products')
  // eslint-disable-next-line @typescript-eslint/ban-types
  getProduct(): Array<Object> {
    return this.productService.getProducts();
  }
}

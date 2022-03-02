import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';

import { Response } from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductService } from 'src/services/product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `soy un filter`;
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productService.findOne(productId);
  }
  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.remove(id);
  }
}

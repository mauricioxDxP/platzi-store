import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { CostumersController } from './controllers/costumers/costumers.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { ProductService } from './services/product.service';
import { BrandService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { CostumersService } from './services/costumers.service';
import { OrdersService } from './services/orders.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    CostumersController,
    BrandsController,
  ],
  providers: [AppService, ProductService, BrandService, CategoriesService, CostumersService, OrdersService, UsersService],
})
export class AppModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from 'src/dtos/orders.dtos';
import { OrdersService } from 'src/services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}
  //methods for get and post methods
  @Get()
  getProducts() {
    return this.orderService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `soy un filter`;
  }
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.findOne(id);
  }
  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.orderService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateOrderDto) {
    return this.orderService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.orderService.remove(id);
  }
}

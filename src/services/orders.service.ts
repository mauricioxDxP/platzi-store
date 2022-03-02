import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from 'src/dtos/orders.dtos';
import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrdersService {
  private counterId = 1;
  private orders: Order[] = [
    {
      id: 1,
      productId: 1,
      quantity: 5,
      total: 100,
      userId: 1,
    },
  ];
  findAll(): Order[] {
    return this.orders;
  }
  findOne(id: number): Order {
    const product = this.orders.find((product) => product.id == id);
    if (!product) throw new NotFoundException(`Order ${id} not found`);
    return product;
  }
  create(payload: CreateOrderDto) {
    this.counterId = this.counterId + 1;
    const newOrder = {
      id: this.counterId,
      ...payload,
    };
    this.orders.push(newOrder);
    return newOrder;
  }
  update(id: number, payload: UpdateOrderDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.orders.findIndex((item) => item.id == id);
      this.orders[index] = {
        ...product,
        ...payload,
      };
      return this.orders[index];
    }
    return null;
  }
  remove(id: number) {
    const index = this.orders.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    this.orders.splice(index, 1);
    return true;
  }
}

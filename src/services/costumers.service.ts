import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCostumerDto, UpdateCostumerDto } from 'src/dtos/costumers.dtos';
import { Costumer } from 'src/entities/costumer.entity';

@Injectable()
export class CostumersService {
  private counterId = 1;
  private costumers: Costumer[] = [
    {
      id: 1,
      name: 'John',
      email: '',
      ci: '53465',
    },
  ];

  findAll(): Costumer[] {
    return this.costumers;
  }

  findOne(id: number): Costumer {
    const costumer = this.costumers.find((costumer) => costumer.id == id);
    if (!costumer) throw new NotFoundException(`Costumer #${id} not found`);
    return costumer;
  }

  create(payload: CreateCostumerDto): Costumer {
    this.counterId = this.counterId + 1;
    const newCostumer = {
      id: this.counterId,
      ...payload,
    };
    this.costumers.push(newCostumer);
    return newCostumer;
  }

  update(id: number, payload: UpdateCostumerDto): Costumer {
    const costumer = this.findOne(id);
    if (costumer) {
      const index = this.costumers.findIndex((item) => item.id == id);
      this.costumers[index] = {
        ...costumer,
        ...payload,
      };
      return this.costumers[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.costumers.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new NotFoundException(`Costumer #${id} not found`);
    }
    this.costumers.splice(index, 1);
    return true;
  }
}

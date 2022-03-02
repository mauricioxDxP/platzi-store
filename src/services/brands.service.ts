import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';
import { Brand } from 'src/entities/brand.entity';

@Injectable()
export class BrandService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'nintendo',
      description: 'marca de juegos',
      image:
        'https://1000marcas.net/wp-content/uploads/2019/12/logo-Nintendo.png',
    },
  ];

  findAll(): Brand[] {
    return this.brands;
  }

  findOne(id: number): Brand {
    const brand = this.brands.find((brand) => brand.id == id);
    if (!brand) throw new NotFoundException(`Brand #${id} not found`);
    return brand;
  }

  create(payload: CreateBrandDto): Brand {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto): Brand {
    const brand = this.findOne(id);
    if (brand) {
      const index = this.brands.findIndex((item) => item.id == id);
      this.brands[index] = {
        ...brand,
        ...payload,
      };
      return this.brands[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.brands.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }

}

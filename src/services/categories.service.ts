import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'juegos',
      description: 'juego',
      image:
        'https://w7.pngwing.com/pngs/594/540/png-transparent-super-nintendo-entertainment-system-video-game-game-controllers-computer-icons-video-games-miscellaneous-game-logo.png',
    },
  ];

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category {
    const category = this.categories.find((category) => category.id == id);
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return category;
  }

  create(payload: CreateCategoryDto): Category {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDto): Category {
    const category = this.findOne(id);
    if (category) {
      const index = this.categories.findIndex((item) => item.id == id);
      this.categories[index] = {
        ...category,
        ...payload,
      };
      return this.categories[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.categories.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[];
  private counterId = 1;
  constructor() {
    this.users = [
      {
        id: 1,
        name: 'John',
        email: '',
        password: '',
        role: 'admin',
      },
    ];
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id == id);
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }

  create(payload: CreateUserDto): User {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto): User {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((item) => item.id == id);
      this.users[index] = {
        ...user,
        ...payload,
      };
      return this.users[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.users.findIndex((item) => item.id == id);
    if (index == -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}

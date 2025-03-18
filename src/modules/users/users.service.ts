import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto/update-user.dto";
import { UsersRepository } from "./repositories/users.repository/users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<Partial<User>> {
    return this.usersRepository.create(createUserDto);
  }

  async findAll(): Promise<Partial<User>[]> {
    return this.usersRepository.findAll();
  }

  async findOneById(id: string): Promise<Partial<User> | null> {
    return this.usersRepository.findOneById(id);
  }

  async findOneByEmail(email: string): Promise<Partial<User> | null> {
    return this.usersRepository.findOneByEmail(email);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Partial<User>> {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<Partial<User>> {
    return this.usersRepository.remove(id);
  }
}

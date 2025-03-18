import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/shared/database/prisma/prisma.service";
import { CreateUserDto } from "../../dto/create-user.dto/create-user.dto";
import { UpdateUserDto } from "../../dto/update-user.dto/update-user.dto";

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<Partial<User>> {
    return this.prisma.user.create({
      data: createUserDto,
      omit: { password: true },
    });
  }

  async findAll(): Promise<Partial<User>[]> {
    return this.prisma.user.findMany({
      omit: {
        password: true,
      },
    });
  }

  async findOneById(id: string): Promise<Partial<User> | null> {
    return this.prisma.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    });
  }

  async findOneByEmail(email: string): Promise<Partial<User> | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Partial<User>> {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      omit: {
        password: true,
      },
    });
  }

  async remove(id: string): Promise<Partial<User>> {
    return this.prisma.user.delete({
      where: { id },
      omit: {
        password: true,
      },
    });
  }
}

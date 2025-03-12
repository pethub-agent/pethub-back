import { Injectable } from "@nestjs/common";
import { Pet } from "@prisma/client";
import { PrismaService } from "src/shared/database/prisma/prisma.service";
import { CreatePetDto } from "../../dto/create-pet.dto/create-pet.dto";
import { UpdatePetDto } from "../../dto/update-pet.dto/update-pet.dto";

@Injectable()
export class PetsRepository {
  constructor(private prisma: PrismaService) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    return this.prisma.pet.create({ data: createPetDto });
  }

  async findAll(): Promise<Pet[]> {
    return this.prisma.pet.findMany({ include: { owner: true } });
  }

  async findOneById(id: string): Promise<Pet | null> {
    return this.prisma.pet.findUnique({
      where: { id },
      include: { owner: true },
    });
  }

  async update(id: string, updatePetDto: UpdatePetDto): Promise<Pet> {
    return this.prisma.pet.update({ where: { id }, data: updatePetDto });
  }

  async remove(id: string): Promise<Pet> {
    return this.prisma.pet.delete({ where: { id } });
  }
}

import { Injectable } from "@nestjs/common";
import { Pet } from "@prisma/client";
import { CreatePetDto } from "./dto/create-pet.dto/create-pet.dto";
import { UpdatePetDto } from "./dto/update-pet.dto/update-pet.dto";
import { PetsRepository } from "./repositories/pets.repository/pets.repository";

@Injectable()
export class PetsService {
  constructor(private readonly petsRepository: PetsRepository) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    return this.petsRepository.create(createPetDto);
  }

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.findAll();
  }

  async findOneById(id: string): Promise<Pet | null> {
    return this.petsRepository.findOneById(id);
  }

  async update(id: string, updatePetDto: UpdatePetDto): Promise<Pet> {
    return this.petsRepository.update(id, updatePetDto);
  }

  async remove(id: string): Promise<Pet> {
    return this.petsRepository.remove(id);
  }
}

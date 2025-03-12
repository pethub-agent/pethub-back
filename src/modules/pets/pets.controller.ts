import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";

import { CreatePetDto } from "./dto/create-pet.dto/create-pet.dto";
import { UpdatePetDto } from "./dto/update-pet.dto/update-pet.dto";
import { PetsService } from "./pets.service";

@Controller("pets")
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.petsService.findOneById(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.petsService.remove(id);
  }
}

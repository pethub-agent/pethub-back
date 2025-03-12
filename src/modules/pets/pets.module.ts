import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../shared/database/database.module";
import { PetsController } from "./pets.controller";
import { PetsService } from "./pets.service";
import { PetsRepository } from "./repositories/pets.repository/pets.repository";

@Module({
  imports: [DatabaseModule],
  controllers: [PetsController],
  providers: [PetsService, PetsRepository],
  exports: [PetsService],
})
export class PetsModule {}

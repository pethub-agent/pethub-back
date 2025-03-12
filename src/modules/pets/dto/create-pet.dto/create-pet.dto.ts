import { IsString } from "class-validator";

export class CreatePetDto {
  @IsString()
  name: string;

  @IsString()
  ownerId: string; // Change the type of ownerId to string
}

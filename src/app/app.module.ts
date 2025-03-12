import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/modules/auth/auth.module";
import { PetsModule } from "src/modules/pets/pets.module";
import { UsersModule } from "src/modules/users/users.module";
import { DatabaseModule } from "src/shared/database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    PetsModule,
  ],
})
export class AppModule {}

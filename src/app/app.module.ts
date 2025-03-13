import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/modules/auth/auth.module";
import { PetsModule } from "src/modules/pets/pets.module";
import { UsersModule } from "src/modules/users/users.module";
import { DatabaseModule } from "src/shared/database/database.module";
import appConfig from "../config/app.config";
import jwtConfig from "../config/jwt.config";
import prismaConfig from "../config/prisma.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [jwtConfig, appConfig, prismaConfig],
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    PetsModule,
  ],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import appConfig from "src/config/app.config";
import jwtConfig from "src/config/jwt.config";
import prismaConfig from "src/config/prisma.config";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [jwtConfig, appConfig, prismaConfig],
    }),
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}

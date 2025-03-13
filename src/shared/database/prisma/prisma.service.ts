// shared/database/prisma.service.ts
import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly configService: ConfigService) {
    // Certifique-se de que o ConfigService está sendo injetado corretamente
    const databaseUrl = configService.get<string>("prisma.database.url");
    console.log("Database URL from ConfigService:", databaseUrl); // Adicionando log para verificar a URL do banco de dados
    console.log("DATABASE_URL environment variable:", process.env.DATABASE_URL); // Adicionando log para verificar a variável de ambiente
    super({
      datasources: {
        db: {
          url: databaseUrl, // Pegando a URL do banco de dados
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

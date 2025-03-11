import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { PrismaProvider } from "./common/providers/prisma/prisma.provider";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaProvider,
  ) {}

  @Get()
  async getHello() {
    return await this.prisma.user.findMany();
  }
}

import { Module } from "@nestjs/common";
import { PrismaProvider } from "./providers/prisma/prisma.provider";

@Module({
  providers: [PrismaProvider],
  exports: [PrismaProvider],
  imports: [],
})
export class CommonModule {}

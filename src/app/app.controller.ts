import { Controller, Get } from "@nestjs/common";
import { Public } from "src/common/decorators/roles/public.decorator";

@Controller()
export class AppController {
  @Public()
  @Get("health")
  async healthCheck() {
    return "OK";
  }
}

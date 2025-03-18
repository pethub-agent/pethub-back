import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { HttpExceptionFilter } from "./common/filters/http-exception/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
    methods: "*",
  });
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}
bootstrap();

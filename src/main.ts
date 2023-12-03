import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class SomeEntityController {
  @Get()
  someFunctionToHandleSomeRoute() {
    return "I handle some";
  }
}

@Module({
  controllers: [SomeEntityController],
})
class SomeModule {}

async function bootstrap() {
  const app = await NestFactory.create(SomeModule);

  await app.listen(3000);
}

bootstrap();

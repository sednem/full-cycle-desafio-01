import { NestFactory } from '@nestjs/core';
import { Partner1Module } from './partner1.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { PrismaExceptionFilter } from '@app/core/exception-filters/prisma.exception-filter';
import { SpotNotExistExceptionFilter } from '@app/core/exception-filters/spot-not-exist.exception-filter';
import { SpotNotAvailableExceptionFilter } from '@app/core/exception-filters/spot-not-available.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(Partner1Module);

  app.useGlobalFilters(
    new PrismaExceptionFilter(),
    new SpotNotExistExceptionFilter(),
    new SpotNotAvailableExceptionFilter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

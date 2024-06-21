import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { SpotNotAvailableError } from '../errors/spot-not-available.error';

@Catch(SpotNotAvailableError)
export class SpotNotAvailableExceptionFilter extends BaseExceptionFilter {
  catch(exception: SpotNotAvailableError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      message: exception.message,
    });
  }
}

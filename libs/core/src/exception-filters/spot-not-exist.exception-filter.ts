import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { SpotNotExistError } from '../errors/spot-not-exist.error';

@Catch(SpotNotExistError)
export class SpotNotExistExceptionFilter extends BaseExceptionFilter {
  catch(exception: SpotNotExistError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(404).json({
      statusCode: 404,
      message: exception.message,
    });
  }
}

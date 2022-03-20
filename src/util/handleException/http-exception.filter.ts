import {
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  Catch,
  HttpStatus,
} from '@nestjs/common';
@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const status = exception.getStatus()
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    const errorResponse = {
      code: status,
      timestamp: new Date().toLocaleDateString(),
      path: request && request.url ? request.url : null,
      method: request && request.method ? request.method : null,
      message: exception.message || null,
    };
    response.status(status).json(errorResponse);
  }
}
// import {
//   ExceptionFilter,
//   Catch,
//   ArgumentsHost,
//   HttpException,
// } from '@nestjs/common';
// import { Request, Response } from 'express';

// @Catch(HttpException)
// export class HttpErrorFilter implements ExceptionFilter {
//   catch(exception: HttpException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();
//     const request = ctx.getRequest<Request>();
//     const status = exception.getStatus();

//     response.status(status).json({
//       statusCode: status,
//       timestamp: new Date().toISOString(),
//       path: request.url,
//       mesage: exception.message || null,
//     });
//   }
// }

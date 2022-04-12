// import {
//   ExceptionFilter,
//   Catch,
//   ArgumentsHost,
//   NotFoundException,
//   HttpException
// } from '@nestjs/common';
// import { Request, Response } from 'express';

// @Catch(HttpException)
// export class HttpErrorFilter implements ExceptionFilter {
//   catch(exception: NotFoundException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();
//     const request = ctx.getRequest<Request>();
//     const status = exception.getStatus();
//     console.log('Message: ', exception?.message);
//     console.log('response: ', response);
//     response.status(status).json({
//       statusCode: status,
//       timestamp: new Date().toISOString(),
//       mesage: exception?.message,
//       method: request.method,
//       path: request.url,
//     });
//   }
// }

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(NotFoundException)
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;
    console.log('Message: ', message);
    response.status(status).json({
      message,
      statusCode: status,
      time: new Date().toISOString(),
      path: request.url,
    });
  }
}

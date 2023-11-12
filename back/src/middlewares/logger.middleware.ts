import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LogsService } from 'src/logs/logs.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logsService: LogsService) {}

  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl } = request;

    const send = response.send;

    response.send = (c) => {
      const {
        statusCode,
        req: { user },
      } = response;

      const crud = {
        POST: 'CREATE',
        PUT: 'UPDATE',
        PATH: 'UPDATE',
        DELETE: 'DELETE',
      };

      if (statusCode.toString().startsWith('2') && method !== 'GET') {
        const table = originalUrl.split('/')[1].replaceAll('-', '_');

        let table_pk = originalUrl.split('/')[2];
        if (!table_pk) {
          const body = JSON.parse(c);
          table_pk = body['id'];
        }

        this.logsService.send(table, +table_pk, crud[method], user['name']);
      }

      response.send = send;

      return response.send(c);
    };

    next();
  }
}

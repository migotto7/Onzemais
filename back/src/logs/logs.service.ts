import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class LogsService {
  constructor(private readonly httpService: HttpService) {}

  async send(
    table: string,
    table_pk: number,
    crud: 'CREATE' | 'UPDATE' | 'DELETE',
    username: string,
  ) {
    const res = this.httpService
      .post(
        `${process.env.LOG_API}/insert/{your_team, your_password, your_dbname, your_table, your_table_pk, crud, your_username}`,
        null,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            your_team: process.env.LOG_TEAM,
            your_password: process.env.LOG_PASSWORD,
            your_dbname: process.env.LOG_DBNAME,
            your_table: table,
            your_table_pk: table_pk,
            crud,
            your_username: username,
          },
        },
      )
      .pipe(map((res) => res.data))
      .pipe(
        catchError((e) => {
          console.log(e.response, e.response.data.detail);
          throw new Error('Error API Log');
        }),
      );

    const data = await lastValueFrom(res);
    console.log('Log API', { data });
  }
}

import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [LogsService],
  exports: [LogsService],
})
export class LogsModule {}

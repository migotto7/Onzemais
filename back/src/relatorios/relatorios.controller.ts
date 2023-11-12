import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';

@Controller('relatorios')
export class RelatoriosController {
  constructor(private readonly relatoriosService: RelatoriosService) {}

  @Get('test/:id')
  test(@Param('id', ParseIntPipe) id: string) {
    return this.relatoriosService.test(+id);
  }
}

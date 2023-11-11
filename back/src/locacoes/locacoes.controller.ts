import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { LocacoesService } from './locacoes.service';
import { CreateLocacoeDto } from './dto/create-locacoe.dto';
import { UpdateLocacoeDto } from './dto/update-locacoe.dto';

@Controller('locacoes')
export class LocacoesController {
  constructor(private readonly locacoesService: LocacoesService) {}

  @Post()
  create(@Body() createLocacoeDto: CreateLocacoeDto) {
    return this.locacoesService.create(createLocacoeDto);
  }

  @Get()
  findAll() {
    return this.locacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.locacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateLocacoeDto: UpdateLocacoeDto,
  ) {
    return this.locacoesService.update(+id, updateLocacoeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.locacoesService.remove(+id);
  }
}

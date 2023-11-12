import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { EspacosEsportivosService } from './espacos-esportivos.service';
import { CreateEspacosEsportivoDto } from './dto/create-espacos-esportivo.dto';
import { UpdateEspacosEsportivoDto } from './dto/update-espacos-esportivo.dto';
import { AccessTokenGuard } from 'src/auth/guards/accessToken.guard';

@Controller('espacos-esportivos')
@UseGuards(AccessTokenGuard)
export class EspacosEsportivosController {
  constructor(
    private readonly espacosEsportivosService: EspacosEsportivosService,
  ) {}

  @Post()
  create(@Body() createEspacosEsportivoDto: CreateEspacosEsportivoDto) {
    return this.espacosEsportivosService.create(createEspacosEsportivoDto);
  }

  @Get()
  findAll() {
    return this.espacosEsportivosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.espacosEsportivosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateEspacosEsportivoDto: UpdateEspacosEsportivoDto,
  ) {
    return this.espacosEsportivosService.update(+id, updateEspacosEsportivoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.espacosEsportivosService.remove(+id);
  }
}

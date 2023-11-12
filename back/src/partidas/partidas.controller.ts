import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PartidasService } from './partidas.service';
import { CreatePartidaDto } from './dto/create-partida.dto';
import { UpdatePartidaDto } from './dto/update-partida.dto';
import { AccessTokenGuard } from 'src/auth/guards/accessToken.guard';

@Controller('partidas')
@UseGuards(AccessTokenGuard)
export class PartidasController {
  constructor(private readonly partidasService: PartidasService) {}

  @Post()
  create(@Body() createPartidaDto: CreatePartidaDto) {
    return this.partidasService.create(createPartidaDto);
  }

  @Get()
  findAll() {
    return this.partidasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.partidasService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updatePartidaDto: UpdatePartidaDto,
  ) {
    return this.partidasService.update(+id, updatePartidaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.partidasService.remove(+id);
  }
}

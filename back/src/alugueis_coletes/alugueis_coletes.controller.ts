import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { AlugueisColetesService } from './alugueis_coletes.service';
import { CreateAlugueisColeteDto } from './dto/create-alugueis_colete.dto';
import { UpdateAlugueisColeteDto } from './dto/update-alugueis_colete.dto';

@Controller('alugueis-coletes')
export class AlugueisColetesController {
  constructor(
    private readonly alugueisColetesService: AlugueisColetesService,
  ) {}

  @Post()
  create(@Body() createAlugueisColeteDto: CreateAlugueisColeteDto) {
    return this.alugueisColetesService.create(createAlugueisColeteDto);
  }

  @Get()
  findAll() {
    return this.alugueisColetesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.alugueisColetesService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateAlugueisColeteDto: UpdateAlugueisColeteDto,
  ) {
    return this.alugueisColetesService.update(+id, updateAlugueisColeteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.alugueisColetesService.remove(+id);
  }
}

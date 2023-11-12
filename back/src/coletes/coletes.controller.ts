import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ColetesService } from './coletes.service';
import { CreateColeteDto } from './dto/create-colete.dto';
import { UpdateColeteDto } from './dto/update-colete.dto';
import { AccessTokenGuard } from 'src/auth/guards/accessToken.guard';

@Controller('coletes')
@UseGuards(AccessTokenGuard)
export class ColetesController {
  constructor(private readonly coletesService: ColetesService) {}

  @Post()
  create(@Body() createColeteDto: CreateColeteDto) {
    return this.coletesService.create(createColeteDto);
  }

  @Get()
  findAll() {
    return this.coletesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.coletesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateColeteDto: UpdateColeteDto,
  ) {
    return this.coletesService.update(+id, updateColeteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.coletesService.remove(+id);
  }
}

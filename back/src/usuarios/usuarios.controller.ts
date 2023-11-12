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
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AccessTokenGuard } from 'src/auth/guards/accessToken.guard';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  @UseGuards(AccessTokenGuard)
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @UseGuards(AccessTokenGuard)
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AccessTokenGuard)
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard)
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.usuariosService.remove(+id);
  }
}

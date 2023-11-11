import { Usuario } from '@prisma/client';

export class UsuarioEntity implements Usuario {
  id: number;
  senha: string;
  email: string;
  nome: string;
  perfil: string;
  empresa_id: number;
}

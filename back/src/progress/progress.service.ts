import { Injectable } from '@nestjs/common';

@Injectable()
export class ProgressService {

    saludo(): string{

        return "Esta es la página de Progreso"
    }
}

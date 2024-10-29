import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamService {

    saludo(): string{

        return "Esta es la página de Examen"
    }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ExerciseService {

     saludo(): string {

        return "Esta es la página de Ejercicio"
    }
}

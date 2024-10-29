import { Injectable } from '@nestjs/common';

@Injectable()
export class GamificationService {
     saludo(): string {

        return "esta es la página de Gamificación"
    }
}

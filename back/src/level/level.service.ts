import { Injectable } from '@nestjs/common';

@Injectable()
export class LevelService {

    saludo(): string{
        return "Esta es la ágina de Nivel"
    }
}

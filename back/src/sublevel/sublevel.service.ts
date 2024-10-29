import { Injectable } from '@nestjs/common';

@Injectable()
export class SublevelService {

    saludo(): string{
        return "Esta es la página de Subnivel"
    }
}

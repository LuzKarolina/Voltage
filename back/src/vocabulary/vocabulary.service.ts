import { Injectable } from '@nestjs/common';

@Injectable()
export class VocabularyService {

    saludo(): string{

        return "esta es la página de Vocabulario"
    }
}

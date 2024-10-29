import { Controller, Get } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';

@Controller('vocabulary')
export class VocabularyController {

    constructor (private readonly vocabularyService: VocabularyService){}

    @Get()

    vocabularyHola(): string{

        return this.vocabularyService.saludo()
    }
}

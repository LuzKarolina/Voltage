import { Controller, Get } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {

    constructor (private readonly exerciseService: ExerciseService){}

     @Get()

     exerciseHola(): string {
        return this.exerciseService.saludo()
    }
}

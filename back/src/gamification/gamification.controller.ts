import { Controller, Get } from '@nestjs/common';
import { GamificationService } from './gamification.service';

@Controller('gamification')
export class GamificationController {

    constructor (private readonly gamificationService: GamificationService){}

     @Get()
     userHola(): string{
        return this.gamificationService.saludo()
    }
}

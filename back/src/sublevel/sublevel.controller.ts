import { Controller, Get } from '@nestjs/common';
import { SublevelService } from './sublevel.service';

@Controller('sublevel')
export class SublevelController {

    constructor (private readonly sublevelService: SublevelService){}

    @Get()

    SublevelHola(): string{
        return this.sublevelService.saludo()
    }
}

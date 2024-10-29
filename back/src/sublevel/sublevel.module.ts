import { Module } from '@nestjs/common';
import { SublevelService } from './sublevel.service';
import { SublevelController } from './sublevel.controller';

@Module({

     providers: [SublevelService], 
     controllers: [SublevelController]

})
export class SublevelModule {}

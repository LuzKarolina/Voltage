import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { GamificationController } from './gamification/gamification.controller';
import { GamificationService } from './gamification/gamification.service';
import { GamificationModule } from './gamification/gamification.module';
import { ExamController } from './exam/exam.controller';
import { ExamModule } from './exam/exam.module';
import { ExerciseController } from './exercise/exercise.controller';
import { ExerciseModule } from './exercise/exercise.module';
import { VocabularyController } from './vocabulary/vocabulary.controller';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { SkillController } from './skill/skill.controller';
import { SkillService } from './skill/skill.service';
import { SkillModule } from './skill/skill.module';
import { LevelController } from './level/level.controller';
import { LevelService } from './level/level.service';
import { LevelModule } from './level/level.module';
import { SublevelController } from './sublevel/sublevel.controller';
import { SublevelService } from './sublevel/sublevel.service';
import { SublevelModule } from './sublevel/sublevel.module';
import { ProgressController } from './progress/progress.controller';
import { ProgressService } from './progress/progress.service';
import { ProgressModule } from './progress/progress.module';
import { MatchEtController } from './match-et/match-et.controller';
import { MatchEtService } from './match-et/match-et.service';
import { MatchEtModule } from './match-et/match-et.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Admin:semillero2024*@cluster0.vhq3q.mongodb.net/Voltage_dev'),

    UserModule, GamificationModule, ExamModule, ExerciseModule, VocabularyModule, SkillModule, LevelModule, SublevelModule, ProgressModule, MatchEtModule],
  controllers: [AppController, MatchEtController],
  providers: [AppService, MatchEtService]
})
export class AppModule {}

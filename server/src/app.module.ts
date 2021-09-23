import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckModule } from './core/deck/deck.module';
import { Deck1Module } from './core/deck1/deck1.module';
import { CardModule } from './core/card/card.module';

import { Card } from './core/card/entities/card.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://devill96:Recordar$01@cluster0.wz85e.mongodb.net/?retryWrites=true&w=majority',
      entities: [Card],
      synchronize: true,
    }),
    DeckModule,
    Deck1Module,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

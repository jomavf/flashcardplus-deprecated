import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckModule } from './core/deck/deck.module';
import { Deck1Module } from './core/deck1/deck1.module';
import { CardModule } from './core/card/card.module';

import { Card } from './core/card/entities/card.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_URL,
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

import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deck } from './entities/deck.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deck])],
  controllers: [DeckController],
  providers: [DeckService],
})
export class DeckModule {}

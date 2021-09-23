import { Module } from '@nestjs/common';
import { Deck1Service } from './deck1.service';
import { Deck1Gateway } from './deck1.gateway';

@Module({
  providers: [Deck1Gateway, Deck1Service]
})
export class Deck1Module {}

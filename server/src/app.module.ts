import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckModule } from './core/deck/deck.module';
import { Deck1Module } from './core/deck1/deck1.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      // host: 'srv://cluster0.wz85e.mongodb.net',
      // port: 27017,
      // username: 'devill96',
      // password: 'Recordar$01',
      // database: 'myFirstDatabase',
      url: 'mongodb+srv://devill96:Recordar$01@cluster0.wz85e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      entities: [],
      synchronize: true,
    }),
    DeckModule,
    Deck1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Deck1Service } from './deck1.service';
import { CreateDeck1Dto } from './dto/create-deck1.dto';
import { UpdateDeck1Dto } from './dto/update-deck1.dto';

@WebSocketGateway()
export class Deck1Gateway {
  constructor(private readonly deck1Service: Deck1Service) {}

  @SubscribeMessage('createDeck1')
  create(@MessageBody() createDeck1Dto: CreateDeck1Dto) {
    return this.deck1Service.create(createDeck1Dto);
  }

  @SubscribeMessage('findAllDeck1')
  findAll() {
    return this.deck1Service.findAll();
  }

  @SubscribeMessage('findOneDeck1')
  findOne(@MessageBody() id: number) {
    return this.deck1Service.findOne(id);
  }

  @SubscribeMessage('updateDeck1')
  update(@MessageBody() updateDeck1Dto: UpdateDeck1Dto) {
    return this.deck1Service.update(updateDeck1Dto.id, updateDeck1Dto);
  }

  @SubscribeMessage('removeDeck1')
  remove(@MessageBody() id: number) {
    return this.deck1Service.remove(id);
  }
}

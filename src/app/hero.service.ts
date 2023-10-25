import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeros():Observable<Hero[]>{
    // return HEROS;
    const heroes=of(HEROS);
    this.messageService.add('HeroService:fetch heroes')
    return heroes;
  }

  getHero(id:number):Observable<Hero>{
    const hero=HEROS.find(h => h.id ===id)!;
    this.messageService.add(`heroservices : fetched hero id=${id}`)
    return of(hero)
  }
}

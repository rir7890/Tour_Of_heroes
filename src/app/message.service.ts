import { ChangeDetectorRef, Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messages:string[]=[]

  add(message:string){
    this.messages.push(message)
  }

  clear(){
    // console.log(this.messages)
    this.messages=[];
  }

}

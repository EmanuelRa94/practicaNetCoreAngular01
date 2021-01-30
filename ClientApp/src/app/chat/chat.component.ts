import { Component } from '@angular/core';

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html'
})

export class ChatComponent {
  public lstMessages: string[] = ["Hola mundo","Que onda","CTM"];  
}

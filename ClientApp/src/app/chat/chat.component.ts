import { Component } from '@angular/core';

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html'
})

export class ChatComponent {
  public nombre = "Emanuel Ramirez";

  public CambiaNombre() {
    this.nombre = "Tomas";
  }
}

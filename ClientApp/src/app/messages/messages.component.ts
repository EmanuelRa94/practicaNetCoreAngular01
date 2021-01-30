import { Component, Input } from '@angular/core';

@Component({
  selector: "app-message",
  templateUrl: "./messages.component.html"
})

export class MessageComponent {
  @Input() texto: string;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard-events',
  imports: [],
  templateUrl: './keyboard-events.component.html',
  styleUrl: './keyboard-events.component.scss',
})
export class KeyboardEventsComponent {
  updateField(event: Event): void {
    console.log('The user pressed enter in the text field.', event);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
  textInterpolation = 'Text Interpolation';
  btnDisabled: boolean = true;
  firstName: any = 'John';
  objectType: any = 'btn';
  eventTriggered(e: any) {
    console.log(e);
  }
}

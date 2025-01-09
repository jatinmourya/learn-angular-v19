import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  var1 = 'this is from parent component';
  var2 = 1;
  var3 = 1;
  var4 =
    'alias key as signalInput_4 but in child it is defined as signalInput4';
  var5 = '            lsdjfksl f sd   s dfjsldfj s          ';
  model1 = 5;
  outputFromChild1: any = '';
  outputFromChild2: any = '';

  generateRandomNumber() {
    this.var2 = Math.round(Math.random() * 100);
    this.var3 = Math.round(Math.random() * 100);
    this.model1 = Math.round(Math.random() * 100);
    return Math.round(Math.random() * 100);
  }
  generateRandomtext() {
    this.var1 = Math.random().toString(36).substring(2);
    this.var4 = Math.random().toString(36).substring(2);
    return Math.random().toString(36).substring(2);
  }
  output1Changed(e: string) {
    this.outputFromChild1 = e;
  }
  output2Changed(e: string) {
    this.outputFromChild2 = e;
  }
}

import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  imports: [],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss',
})
export class InputOutputComponent {
  ngOnInit() {
    // this.emitOutput();
  }
  // // simple signal based input
  // signalInput0 = input('signal based input 1');
  // // signal based input with type
  // signalInput1 = input<number>();
  // // signal based input with type and required
  // signalInput2 = input.required<number>();
  // // signal based input with alias
  // signalInput3 = input({ alias: 'sliderValue' });
  // // signal based input with default value and transform function
  // signalInput = input('signal based input 1', { transform: this.trimString });
  // // for two way binding
  // signalInputModel = model<any>();
  // // output signal
  // signalInput00 = output<string>();

  // inc1() {
  //   this.signalInputModel.update((v: any) => v + 1);
  // }
  // set0() {
  //   this.signalInputModel.set(0);
  // }
  // dec1() {
  //   this.signalInputModel.update((v: any) => v - 1);
  // }
  // trimString(value: string | undefined): string {
  //   return (
  //     value?.trim() + ' : text added with tranfrom function in input signal'
  //   );
  // }
  // emitOutput() {
  //   this.signalInput00.emit(
  //     'output signal emitted from input-output component'
  //   );
  // }
}

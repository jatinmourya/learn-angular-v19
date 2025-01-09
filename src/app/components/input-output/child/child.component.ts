import { Component, computed, input, model, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  ngOnInit() {
    this.emitOutput();
    console.log(this.generateRandomtext());
  }
  // input signal cannot be modified in child component
  // The input function accepts a config object as a second parameter that lets you change the way that input works.
  // simple signal based input
  signalInput1 = input('signal based input 1');
  label1 = computed(() => `The slider's value is ${this.signalInput1()}`);
  // signal based input with type
  signalInput2 = input<number>();
  // signal based input with type and required
  signalInput3 = input.required<number>();
  // signal based input with alias
  signalInput4 = input('', { alias: 'signalInput_4' });
  // signal based input with default value and transform function
  // You can specify a transform function to change the value of an input when it's set by Angular.
  // Angular includes two built-in transform functions for the two most common scenarios: coercing values to boolean and numbers.
  // disabled = input(false, {transform: booleanAttribute});
  // value = input(0, {transform: numberAttribute});
  signalInput5 = input('signal based input', { transform: this.trimString });
  // for two way binding
  signalInputModel1 = model<any>();
  // output signal
  output1 = output<string>();
  output2 = output<string>({ alias: 'output_2' });

  trimString(value: string | undefined): string {
    return (
      value?.trim() + ' : text added with tranfrom function in input signal'
    );
  }

  emitOutput() {
    this.output1.emit(Math.random().toString(36).substring(2));
    this.output2.emit(Math.random().toString(36).substring(2));
  }

  generateRandomNumber() {
    this.signalInputModel1.set(Math.round(Math.random() * 100));
    return Math.round(Math.random() * 100);
  }
  generateRandomtext() {
    return Math.random().toString(36).substring(2);
  }
}

import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  KeyValuePipe,
  NgFor,
  SlicePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    KeyValuePipe,
    JsonPipe,
    SlicePipe,
    NgFor,
    CustomPipePipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  today = new Date();
  object: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };

  map = new Map([
    [2, 'foo'],
    [1, 'bar'],
  ]);
  items = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
}

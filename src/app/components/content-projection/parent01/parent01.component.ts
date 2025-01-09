import { Component } from '@angular/core';
import { Child01Component } from '../child01/child01.component';

@Component({
  selector: 'app-parent01',
  imports: [Child01Component],
  templateUrl: './parent01.component.html',
  styleUrl: './parent01.component.scss',
})
export class Parent01Component {}

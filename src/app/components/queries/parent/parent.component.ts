import {
  Component,
  ElementRef,
  ViewChild,
  viewChild,
  viewChildren,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  // old way
  // @ViewChild('elementRef', { static: true }) elementRef?: ElementRef;
  // elementRef = viewChild<ElementRef<HTMLButtonElement>>('elementRef');
  // new way, signal based
  elementRefs = viewChildren<ElementRef<HTMLButtonElement>>('elementRef');
  childComponent = viewChild(ChildComponent);
  childComponents = viewChildren(ChildComponent);
  ngOnInit() {
    // old way
    // console.log(this.elementRef?.nativeElement.textContent);
    // console.log(this.elementRef?.nativeElement.innerText);
    // console.log(this.elementRef?.nativeElement.innerHTML);
    // new way
    // console.log(this.elementRef()?.nativeElement.textContent);
    // console.log(this.elementRef()?.nativeElement.innerText);
    // console.log(this.elementRef()?.nativeElement.innerHTML);
    // console.log(this.elementRefs());
    // console.log(this.childComponent());
    console.log(this.childComponents());
  }

  incrementChildCounter() {
    console.log(this.childComponent());
    this.childComponent()?.increment();
  }

  decrementChildCounter() {
    console.log(this.childComponent());
    this.childComponent()?.decrement();
  }
}

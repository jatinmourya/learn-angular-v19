import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-element',
  imports: [],
  templateUrl: './host-element.component.html',
  styleUrl: './host-element.component.scss',
  host: {
    role: 'slider',
    '[attr.aria-valuenow]': 'value',
    '[class.active]': 'isActive()',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  },
})
export class HostElementComponent {
  // The @HostBinding and @HostListener decorators
  // You can alternatively bind to the host element by applying the @HostBinding and @HostListener decorator to class members.
  // @HostBinding lets you bind host properties and attributes to properties and methods:
  // @HostListener lets you bind event listeners to the host element. The decorator accepts an event name and an optional array of arguments:
  // Always prefer using the host property over @HostBinding and @HostListener. These decorators exist exclusively for backwards compatibility.
  //
  // Binding collisions
  // When you use a component in a template, you can add bindings to that component instance's element. The component may also define host bindings for the same properties or attributes.
  // check
  // In cases like this, the following rules determine which value wins:
  // If both values are static, the instance binding wins.
  // If one value is static and the other dynamic, the dynamic value wins.
  // If both values are dynamic, the component's host binding wins.
  //
  //
  //
  //
  // either use this
  // host: {
  //   role: 'slider',
  //   '[attr.aria-valuenow]': 'value',
  //   '[class.active]': 'isActive()',
  //   '[tabIndex]': 'disabled ? -1 : 0',
  //   '(keydown)': 'updateValue($event)',
  // },
  //
  // or use this
  //
  // @HostBinding('attr.aria-valuenow')
  // @HostBinding('tabIndex')
  // @HostBinding('class.active')
  // @HostListener('keydown', ['$event'])
  //
  //
  disabled: boolean = false;
  // @HostBinding('attr.aria-valuenow')
  value: number = 0;
  // @HostBinding('tabIndex')
  getTabIndex() {
    return this.disabled ? -1 : 0;
  }
  // @HostBinding('class.active')
  isActive() {
    return true;
  }
  //
  //
  //
  //
  // @HostListener('keydown', ['$event'])
  updateValue(event: KeyboardEvent) {
    console.log(event);
  }
}

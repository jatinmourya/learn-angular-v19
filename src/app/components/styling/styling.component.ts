import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-styling',
  imports: [],
  templateUrl: './styling.component.html',
  styles: `
  p{
    color:blue
  }
  `,
  // You can also choose to write your styles in separate files:
  // styleUrl: './styling.component.scss',

  // STYLE SCOPING
  //
  // Every component has a view encapsulation setting that determines how the framework scopes a component's styles.
  // There are three view encapsulation modes: Emulated, ShadowDom, and None. You can specify the mode in the @Component decorator:
  //
  // By default, Angular uses emulated encapsulation so that a component's styles only apply to elements defined in that component's template.
  // global styles can affect the component's view
  // 1 encapsulation: ViewEncapsulation.Emulated,
  //
  //
  // You can also use ShadowDom encapsulation, which uses the browser's native shadow DOM implementation to scope styles.
  // This mode strictly guarantees that only that component's styles apply to elements in the component's template.
  // Global styles cannot affect elements in a shadow tree and styles inside the shadow tree cannot affect elements outside of that shadow tree.
  // 2 encapsulation: ViewEncapsulation.ShadowDom,
  //
  //
  // You can also disable view encapsulation by setting it to None. This mode allows a component's styles to affect globally
  // 3 encapsulation: ViewEncapsulation.None,
})
export class StylingComponent {}

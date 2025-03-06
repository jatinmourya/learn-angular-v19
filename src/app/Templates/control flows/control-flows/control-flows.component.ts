import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flows',
  imports: [],
  templateUrl: './control-flows.component.html',
  styleUrl: './control-flows.component.scss',
})
export class ControlFlowsComponent {
  var1 = `@if (user.profile.settings.startDate; as startDate) {
    {{ startDate }}
  }`;
  var2 = `@for (item of items; track item.id) {
    {{ item.name }}
  }`;
  var3 = `@for (item of items; track item.id; let idx = $index, e = $even) {
    <p>Item #{{ idx }}: {{ item.name }}</p>
  }`;
  var4 = `@for (item of items; track item.name) {
    <li> {{ item.name }}</li>
  } @empty {
    <li aria-hidden="true"> There are no items. </li>
  }`;
  var5 = `@switch (userPermissions) {
    @case ('admin') {
      <app-admin-dashboard />
    }
    @case ('reviewer') {
      <app-reviewer-dashboard />
    }
    @case ('editor') {
      <app-editor-dashboard />
    }
    @default {
      <app-viewer-dashboard />
    }
  }`;
}

import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  serv = inject(ServiceService);
  constructor() {
    if (window.innerWidth < 992) {
      this.serv.changeSidebarCollapsed(false);
      this.serv.changeSidebarFloating(true);
      this.serv.changeSidebarFloatingExpanded(false);
    } else {
      this.serv.changeSidebarFloating(false);
      this.serv.changeSidebarFloatingExpanded(false);
    }
  }
}

import { Component, inject, OnInit } from '@angular/core';
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
    this.serv.sidebarCollapsed.subscribe((res: any) => {
      this.sbCollapsed = res;
    });

    this.serv.sidebarFloating.subscribe((res: any) => {
      this.sbFloating = res;
    });

    this.serv.sidebarFloatingExpanded.subscribe((res: any) => {
      this.sbFloatingExpanded = res;
    });
  }

  sbCollapsed: boolean = Boolean(
    localStorage.getItem('sidebar-collapsed') == 'true' ? true : false
  );

  sbFloating: boolean = Boolean(
    localStorage.getItem('sidebar-floating') == 'true' ? true : false
  );

  sbFloatingExpanded: boolean = Boolean(
    localStorage.getItem('sidebar-floating-expanded') == 'true' ? true : false
  );
}

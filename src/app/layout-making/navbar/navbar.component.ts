import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false,
})
export class NavbarComponent {
  toggleSidebar() {
    if (this.sbFloating) {
      this.serv.changeSidebarFloatingExpanded(!this.sbFloatingExpanded);
    } else {
      this.serv.changeSidebarCollapsed(!this.sbCollapsed);
    }
  }
  serv = inject(ServiceService);
  constructor() {
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

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
    this.serv.changeSidebarCollapsed(!this.sbCollapsed);
  }
  serv = inject(ServiceService);
  constructor() {
    this.serv.sidebarCollapsed.subscribe((res: any) => {
      this.sbCollapsed = res;
    });
  }

  sbCollapsed: boolean = Boolean(
    localStorage.getItem('sidebar-collapsed') == 'true' ? true : false
  );
}

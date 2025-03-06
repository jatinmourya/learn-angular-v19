import { Component, inject } from '@angular/core';
import { sidebarItems } from '../models';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  toggleSubitem(id: number) {
    let result: any = sidebarItems.find((item) => item.id === id);
    sidebarItems.forEach((item) => {
      if (item.id != id) item.expanded = false;
    });
    result.expanded = !result?.expanded;
    console.log(sidebarItems);
  }
  toggleSidebar() {
    this.serv.changeSidebarCollapsed(!this.sbCollapsed);
  }
  serv = inject(ServiceService);
  sidebarItems: any = [];
  constructor() {
    this.sidebarItems = sidebarItems;
    this.serv.sidebarCollapsed.subscribe((res: any) => {
      this.sbCollapsed = res;
    });
  }

  sbCollapsed: boolean = Boolean(
    localStorage.getItem('sidebar-collapsed') == 'true' ? true : false
  );

  baseHref: any = 'https://jatinmourya.github.io/learn-angular-v19/';
}

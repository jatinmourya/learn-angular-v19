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
    this.serv.sidebarCollapsed.subscribe((res: any) => {
      this.sbCollapsed = res;
    });
  }

  sbCollapsed: boolean = Boolean(
    localStorage.getItem('sidebar-collapsed') == 'true' ? true : false
  );
}

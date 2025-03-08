import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false,
})
export class NavbarComponent {
  serv = inject(ServiceService);
  toggleSidebar() {
    if (this.serv.sbFloating) {
      this.serv.changeSidebarFloatingExpanded(!this.serv.sbFloatingExpanded);
    } else {
      this.serv.changeSidebarCollapsed(!this.serv.sbCollapsed);
    }
    this.serv.adjustPaddingOfWebContent();
  }
}

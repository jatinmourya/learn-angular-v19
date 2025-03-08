import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  sidebarCollapsed = new BehaviorSubject<boolean>(
    Boolean(localStorage.getItem('sidebar-collapsed') == 'true' ? true : false)
  );

  changeSidebarCollapsed(b: boolean) {
    localStorage.setItem('sidebar-collapsed', String(b));
    this.sidebarCollapsed.next(b);
  }

  sidebarFloating = new BehaviorSubject<boolean>(
    Boolean(localStorage.getItem('sidebar-floating') == 'true' ? true : false)
  );

  changeSidebarFloating(b: boolean) {
    localStorage.setItem('sidebar-floating', String(b));
    this.sidebarFloating.next(b);
  }

  sidebarFloatingExpanded = new BehaviorSubject<boolean>(
    Boolean(
      localStorage.getItem('sidebar-floating-expanded') == 'true' ? true : false
    )
  );

  changeSidebarFloatingExpanded(b: boolean) {
    localStorage.setItem('sidebar-floating-expanded', String(b));
    this.sidebarFloatingExpanded.next(b);
  }
}

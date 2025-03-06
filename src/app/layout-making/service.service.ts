import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {
    console.log(Boolean(localStorage.getItem('sidebar-collapsed')));
  }

  sidebarCollapsed = new BehaviorSubject<boolean>(
    Boolean(localStorage.getItem('sidebar-collapsed') == 'true' ? true : false)
  );

  changeSidebarCollapsed(b: boolean) {
    localStorage.setItem('sidebar-collapsed', String(b));
    console.log(
      this.sidebarCollapsed.subscribe((res: any) => console.log(res))
    );
    this.sidebarCollapsed.next(b);
  }
}

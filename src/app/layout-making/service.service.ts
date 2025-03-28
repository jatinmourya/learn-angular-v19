import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {
    this.navProfileOptions.subscribe((res: any) => {
      this.showProfileOptions = res;
    });

    this.sidebarCollapsed.subscribe((res: any) => {
      this.sbCollapsed = res;
    });

    this.sidebarFloating.subscribe((res: any) => {
      this.sbFloating = res;
    });

    this.sidebarFloatingExpanded.subscribe((res: any) => {
      this.sbFloatingExpanded = res;
    });

    this.adjustPaddingOfWebContent();
  }

  showProfileOptions: boolean = Boolean(
    localStorage.getItem('show-profile-options') == 'true' ? true : false
  );

  sbCollapsed: boolean = Boolean(
    localStorage.getItem('sidebar-collapsed') == 'true' ? true : false
  );

  sbFloating: boolean = Boolean(
    localStorage.getItem('sidebar-floating') == 'true' ? true : false
  );

  sbFloatingExpanded: boolean = Boolean(
    localStorage.getItem('sidebar-floating-expanded') == 'true' ? true : false
  );

  // adjust padding left of web content
  adjustPaddingOfWebContent() {
    // console.log(this.sbFloating, !this.sbFloatingExpanded);

    setTimeout(() => {
      let sbWidth = 0;
      let webContent = document.querySelector('.web-content') as HTMLElement;
      if (!this.sbFloating) {
        // console.log(
        //   (document.querySelector('.sidebar') as HTMLElement).clientWidth
        // );
        sbWidth = (document.querySelector('.sidebar') as HTMLElement)
          .clientWidth;
        // webContent.style.transition = '.25s';
        webContent.style.paddingLeft = sbWidth + 'px';
      } else {
        // webContent.style.transition = '.25s';
        webContent.style.paddingLeft = sbWidth + 'px';
      }
    }, 0);
  }

  navProfileOptions = new BehaviorSubject<boolean>(false);

  changeNavProfileOptions(b: boolean) {
    localStorage.setItem('show-profile-options', String(b));
    this.navProfileOptions.next(b);
  }

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

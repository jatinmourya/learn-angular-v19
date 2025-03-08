import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { sidebarItems } from '../models';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  serv = inject(ServiceService);
  sidebarItems: any = [];
  // screen width
  sw: number = 0;

  baseHref: any = 'https://learn-angular-v19.netlify.app';
  // baseHref: any = '';

  constructor(private elementRef: ElementRef) {
    this.sidebarItems = sidebarItems;
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

  toggleSubitem(id: number) {
    let result: any = sidebarItems.find((item) => item.id === id);
    sidebarItems.forEach((item) => {
      if (item.id != id) item.expanded = false;
    });
    result.expanded = !result?.expanded;
    // console.log(sidebarItems);
  }

  toggleSidebar() {
    if (this.sbFloating) {
      this.serv.changeSidebarFloatingExpanded(!this.sbFloatingExpanded);
    } else {
      this.serv.changeSidebarCollapsed(!this.sbCollapsed);
    }
    // if (this.sbFloating) {
    //   if (this.sbFloatingExpanded) {
    //     setTimeout(() => {
    //       this.serv.changeSidebarFloatingExpanded(false);
    //     }, 500);
    //   } else {
    //     this.serv.changeSidebarFloatingExpanded(true);
    //   }
    // } else {
    //   this.serv.changeSidebarCollapsed(!this.sbCollapsed);
    // }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;

    // console.log(clickedElement);

    // if (
    //   !(
    //     clickedElement.classList.contains('sidebar-item-icon') ||
    //     clickedElement.classList.contains('sidebar-item-top')
    //   )
    // ) {
    //   console.log('Clicked on an element with class my-class');
    //   sidebarItems.forEach((item) => {
    //     item.expanded = false;
    //   });
    // }
    // console.log(this.elementRef.nativeElement.contains(clickedElement));
    // console.log(this.elementRef);

    if (!this.elementRef.nativeElement.contains(clickedElement)) {
      // console.log('Clicked outside the component!');

      if (!clickedElement.classList.contains('sidebar-menu-icon')) {
        this.serv.changeSidebarFloatingExpanded(false);
        if (this.sbCollapsed) {
          sidebarItems.forEach((item) => {
            item.expanded = false;
          });
        }
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.sw = window.innerWidth;
    // console.log('Window resized! New width:', this.sw);
    if (this.sw < 992) {
      this.serv.changeSidebarCollapsed(false);
      this.serv.changeSidebarFloating(true);
      this.serv.changeSidebarFloatingExpanded(false);
    } else {
      this.serv.changeSidebarFloating(false);
      this.serv.changeSidebarFloatingExpanded(false);
    }
  }
}

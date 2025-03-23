import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false,
})
export class NavbarComponent {
  serv = inject(ServiceService);
  elementRef: ElementRef = inject(ElementRef);

  toggleProfileOptions() {
    this.serv.changeNavProfileOptions(!this.serv.showProfileOptions);
  }

  toggleSidebar() {
    if (this.serv.sbFloating) {
      this.serv.changeSidebarFloatingExpanded(!this.serv.sbFloatingExpanded);
    } else {
      this.serv.changeSidebarCollapsed(!this.serv.sbCollapsed);
    }
    this.serv.adjustPaddingOfWebContent();
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (
      !this.elementRef.nativeElement
        .querySelector('.profile-icon-section')
        .contains(clickedElement)
    ) {
      // console.log(clickedElement);
      if (!clickedElement.classList.contains('profile-icon')) {
        // console.log(clickedElement);
        this.serv.changeNavProfileOptions(false);
      }
    }
  }
}

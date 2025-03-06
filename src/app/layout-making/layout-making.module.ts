import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMakingRoutingModule } from './layout-making-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [CommonModule, LayoutMakingRoutingModule],
  exports: [MainComponent],
})
export class LayoutMakingModule {}

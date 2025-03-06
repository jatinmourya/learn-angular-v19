import { Routes } from '@angular/router';
import { MainComponent } from './layout-making/main/main.component';
import { LayoutMakingModule } from './layout-making/layout-making.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layout-making/layout-making.module').then(
        (m) => m.LayoutMakingModule
      ),
  },
  // {
  //   path: '',
  //   component: MainComponent,
  // },
];

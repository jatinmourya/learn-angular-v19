import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { StylingComponent } from './components/styling/styling.component';
import { ParentComponent } from './components/input-output/parent/parent.component';
import { Parent01Component } from './components/content-projection/parent01/parent01.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    // SelectorsComponent,
    // StylingComponent,
    // ParentComponent,
    Parent01Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learn-angular-v19';
}

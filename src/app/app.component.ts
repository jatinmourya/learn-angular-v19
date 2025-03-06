import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutMakingModule } from './layout-making/layout-making.module';
// import { SelectorsComponent } from './components/selectors/selectors.component';
// import { StylingComponent } from './components/styling/styling.component';
// import { ParentComponent } from './components/input-output/parent/parent.component';
// import { ParentComponent } from './components/content-projection/parent/parent.component';
// import { HostElementComponent } from './components/host-element/host-element.component';
// import { ObservablesComponent } from './rxjs/observables/observables.component';
// import { KeyboardEventsComponent } from './keyboard-events/keyboard-events.component';
// import { ParentComponent } from './components/queries/parent/parent.component';
// import { BindingComponent } from './Templates/binding/binding.component';
// import { ControlFlowsComponent } from './Templates/control flows/control-flows/control-flows.component';
// import { PipesComponent } from './Templates/pipes/pipes/pipes.component';
// import { DeferBlockComponent } from "./Templates/defer/defer-block/defer-block.component";
// import { MainComponent } from "./state managements/main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutMakingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learn-angular-v19';
}

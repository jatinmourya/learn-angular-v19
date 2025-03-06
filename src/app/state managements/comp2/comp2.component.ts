import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp2',
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss',
})
export class Comp2Component {
  service = inject(ServiceService);
  localData: any;

  ngOnInit() {
    this.service.dataSubject.subscribe((data) => {
      this.localData = data;
    });
  }

  changeData() {
    this.service.updateData(Math.round(Math.random() * 100));
  }
}

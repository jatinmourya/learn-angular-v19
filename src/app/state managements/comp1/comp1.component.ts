import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp1',
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss',
})
export class Comp1Component {
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

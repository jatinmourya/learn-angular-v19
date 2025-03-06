import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp3',
  imports: [],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.scss',
})
export class Comp3Component {
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

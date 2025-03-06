import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  dataSubject = new BehaviorSubject<any>('');
  // public data$ = this.dataSubject.asObservable();

  updateData(newData: any) {
    this.dataSubject.next(newData);
    console.log(this.dataSubject);
  }
}

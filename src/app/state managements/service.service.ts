import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  dataSubject = new BehaviorSubject<number>(0);
  // public data$ = this.dataSubject.asObservable();

  updateData(newData: number) {
    this.dataSubject.next(newData);
  }
}

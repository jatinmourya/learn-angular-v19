import { Component } from '@angular/core';

import { Subject, switchMap, throttleTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observables',
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss',
})
export class ObservablesComponent {
  // constructor() {
  //   this.posts$ = this.service.getPosts();
  // }
  // service = inject(ServiceService);
  // posts$: Observable<any>;
  // getPosts() {
  //   this.service
  //     .getPosts()
  //     .pipe(throttleTime(1000))
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
  private inputSubject = new Subject<string>();

  constructor(private http: HttpClient) {
    this.inputSubject
      .pipe(
        throttleTime(2000), // Throttle to one request every 2 seconds
        switchMap((input) =>
          this.http.get('https://jsonplaceholder.typicode.com/posts')
        )
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  onInput(value: any): void {
    this.inputSubject.next(value);
  }
}

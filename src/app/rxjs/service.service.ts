import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  api = 'https://jsonplaceholder.typicode.com/posts';
  getPosts() {
    return this.http.get(this.api);
  }
}

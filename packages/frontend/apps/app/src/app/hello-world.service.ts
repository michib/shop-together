import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HelloWorldService {
  constructor(private httpClient: HttpClient) {}

  getHelloWorld(): Observable<string> {
    return this.httpClient
      .get<{ message: string }>('/api')
      .pipe(map((result) => result.message));
  }
}

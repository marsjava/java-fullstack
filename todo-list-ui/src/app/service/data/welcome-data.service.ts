import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
export class Welcome{
  constructor(public message: string) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(private http: HttpClient) { }
  getWelcomeMessage() {
    return this.http.get<Welcome>('http://localhost:8080/welcome');
  }
  getWelcomeMessageWithParam(userMessage) {
    return this.http.get<Welcome>(`http://localhost:8080/welcome/${userMessage}`);
  }
}

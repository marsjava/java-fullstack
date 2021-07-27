import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {
  constructor() { }
  authenticate(username, password) {
    console.log('Before auth '+this.isLoggedIn());
    if(username==='srihari' && password==='test') {
      sessionStorage.setItem('authenticUser', username);
      console.log('After auth '+this.isLoggedIn());
      return true;
    } else {
      return false;
    }
  }
  isLoggedIn() {
    let user = sessionStorage.getItem('authenticUser');
    return !(user==null);
  }
  logout() {
    sessionStorage.removeItem('authenticUser');
  }
}

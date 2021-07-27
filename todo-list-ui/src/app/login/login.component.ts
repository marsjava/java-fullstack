import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthService} from "../service/hardcoded-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  invalidLogin = false;

  // create Router Instance
  // ask Angular to router instance
  // dependency injection

  constructor(private router: Router, private hcAuthService: HardcodedAuthService) { }

  ngOnInit(): void {
  }
  handleLogin() {
    if(this.hcAuthService.authenticate(this.username,this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
      this.errorMessage = 'Invalid credentials.';
    }
  }

}

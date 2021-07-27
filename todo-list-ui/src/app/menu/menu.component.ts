import { Component, OnInit } from '@angular/core';
import {HardcodedAuthService} from "../service/hardcoded-auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isLoggedIn: boolean = false;
  constructor(public hcAuthService: HardcodedAuthService) { }

  ngOnInit(): void {
    //this.isLoggedIn = this.hcAuthService.isLoggedIn();
  }

}

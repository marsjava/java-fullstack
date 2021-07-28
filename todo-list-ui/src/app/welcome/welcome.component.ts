import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  message = '';
  userMessage = '';
  // create ActivateRoute instance
  constructor(private route: ActivatedRoute, private wdataService: WelcomeDataService) { }
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }
  getMessage() {
    this.wdataService.getWelcomeMessage().subscribe(
      response => {
        this.message = response.message;
      },
        error => {
        console.log(error);
      },
      () => {
        console.log('Completed.');
      }
    );
  }
  getUserMessage() {
    this.wdataService.getWelcomeMessageWithParam(this.userMessage).subscribe(
      response => {
        this.message = response.message;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Completed.');
      }
    );
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>{{title}}</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  // h1 {
  //   color: blueviolet;
  // }
  // `]
})
export class AppComponent {
  title = 'Todo List Component.';
}

import { Component, OnInit } from '@angular/core';

/*
No Navigation Menu and Footer
Formatting - Using Bootstrap
No Security for menus
Hardcoded logic in the todoList and Login Components (Authentication)
Remaining functionality - Add, Edit/Modify, Delete/Remove
Connect with Spring Boot
Apply the Spring Security
 */

export class Todo{
  constructor(public id: number, public description: string, public isCompleted: boolean, public targetDate: Date) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Learn to Microservices', false, new Date()),
    new Todo(3, 'Learn to Fullstack', false, new Date())
  ];
  todo = {
    id: 1, description: 'Learn to Dance.'
  };
  constructor() { }

  ngOnInit(): void {
  }

}

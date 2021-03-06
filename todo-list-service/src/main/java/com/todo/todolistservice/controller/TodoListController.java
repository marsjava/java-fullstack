package com.todo.todolistservice.controller;

import com.todo.todolistservice.model.Todo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoListController {
    @GetMapping("/hello")
    public String getList(){
        return "Todo List Controller.";
    }
    @GetMapping("/hello-bean")
    public Todo getListBean(){
        return new Todo(1, "Learn Angular", false, new Date());
    }
    @GetMapping("/hello-bean-param/{goal}")
    public Todo getListBean(@PathVariable String goal){
        return new Todo(1, goal, false, new Date());
    }
}

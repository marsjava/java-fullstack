package com.todo.todolistservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoListController {
    @GetMapping
    public String getList(){
        return "Todo List Controller.";
    }
}

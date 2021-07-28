package com.todo.todolistservice.controller;

import com.todo.todolistservice.model.Todo;
import com.todo.todolistservice.model.Welcome;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WelcomeController {
    @GetMapping("/welcome")
    public Welcome getList(){
        return new Welcome("Hello world..");
    }
    @GetMapping("/welcome/{message}")
    public Welcome getListBean(@PathVariable String message){
        return new Welcome(String.format("Welcome to %s", message));
    }
}

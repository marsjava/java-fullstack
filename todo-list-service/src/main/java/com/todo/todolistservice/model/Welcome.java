package com.todo.todolistservice.model;

public class Welcome {
    private String message;
    public Welcome() {
    }
    public Welcome(String message) {
        this.message = message;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    @Override
    public String toString() {
        return "Welcome{" +
                "message='" + message + '\'' +
                '}';
    }
}

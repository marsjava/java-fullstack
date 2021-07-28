package com.todo.todolistservice.model;

import java.util.Date;

public class Todo {
    private Integer id;
    private String description;
    private boolean isCompleted;
    private Date targetDate;
    public Todo() {
    }
    public Todo(Integer id, String description, boolean isCompleted, Date targetDate) {
        this.id = id;
        this.description = description;
        this.isCompleted = isCompleted;
        this.targetDate = targetDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", isCompleted=" + isCompleted +
                ", targetDate=" + targetDate +
                '}';
    }
}

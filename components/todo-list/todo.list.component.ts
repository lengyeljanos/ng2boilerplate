// Todo list component

import { Component } from '@angular/core';
import { TodoListStore } from '../store/todo.store';
import Todo from '../todo-item/todo-item'

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.html',
    styleUrls:['todo-list.css'],
    directives: [Todo]
})

export class TodoList {
    constructor(private store: TodoListStore){}

    addTodo(todo){
        this.store.addTodo(todo);
    }

    removeTodo(todo){
        this.store.removeTodo(todo);
    }

    toggleFinishTodo(todo){
        this.store.toggleFinishTodo(todo);
    }


}

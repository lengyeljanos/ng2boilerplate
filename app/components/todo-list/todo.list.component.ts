// Todo list component

import { Component } from '@angular/core';
import { TodoListStore } from '../../store/todo.store';
import Todo from '../todo-item/todo-item'
import { _addTodo } from '../../actions'

@Component({
    selector: 'todo-list',
    templateUrl: 'app/components/todo-list/todo-list.html',
    styleUrls:['app/components/todo-list/todo-list.css'],
    directives: [Todo]
})

export class TodoList {
    todoID: number;

    constructor(private store: TodoListStore){
        this.todoID = 0;
    }


    addTodo(todo){
        if (todo.length>1){
            this.store.dispatch(_addTodo(todo, this.todoID++));
        }

    }

}

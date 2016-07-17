// Todo list component

import { Component } from '@angular/core';
import { TodoListStore } from '../../store/todo.store';
import Todo from '../todo-item/todo-item'
import { ActionsService } from '../../actions'

@Component({
    selector: 'todo-list',
    templateUrl: 'app/components/todo-list/todo-list.html',
    styleUrls:['app/components/todo-list/todo-list.css'],
    directives: [Todo],
    providers: [ActionsService]
})

export class TodoList {
    todoID: number;
    

    constructor(private store: TodoListStore, private actionsService: ActionsService){
        this.todoID = 0;
        this.actionsService = actionsService;
    }

    addTodo(todo){
        if (todo.length>1){
            this.store.dispatch(this.actionsService._addTodo(todo, this.todoID++));
        }

    }

}

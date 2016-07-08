// Todo Item component

import { Component, Input } from '@angular/core';
import { TodoListStore, TodoListItem as TodoListItemModel} from '../store/todo.store';
import {..., ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'todo-item',
    templateUrl: 'todo-item.html',
    styleUrls: ['todo-item.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export default class Todo {

    @Input()
    todoItem: TodoListItemModel;


    constructor(private store: TodoListStore){}

    removeTodo(todo){
        this.store.removeTodo(todo);
    }

    toggleFinishTodo(todo){
        this.store.toggleFinishTodo(todo);
    }


}
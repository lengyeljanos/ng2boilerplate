// Todo Item component

import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { TodoListStore, TodoListItem as TodoListItemModel} from '../../store/todo.store';
import { ActionsService } from '../../actions'


@Component({
    selector: 'todo-item',
    templateUrl: 'app/components/todo-item/todo-item.html',
    styleUrls: ['app/components/todo-item/todo-item.css'],
    providers: [ActionsService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export default class Todo {

    @Input()
    todo: TodoListItemModel;


    constructor(private store: TodoListStore, private actionsService: ActionsService) { }

    removeTodo(todo){
        console.log("REMOVED ITEM");
        console.log(todo);
        this.store.dispatch(this.actionsService._removeTodo(todo.id));
    }

    toggleFinishedTodo(todo){
        console.log("TOGGLED ITEM");
        console.log(todo);
        this.store.dispatch(this.actionsService._toggleFinishedTodo(todo.id));
    }


}
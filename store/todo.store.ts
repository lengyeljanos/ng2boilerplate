//Todolist store

import Immutable = require('immutable');
import {createStore} from 'redux';
import {reducer, ITodoAction } from '../app/reducer'

export class TodolistItem{
    id: number;
    title: String;
    finished: boolean;
}

export class TodolistStore {
    store = createStore(reducer, Immutable.List<TodolistItem>());

    get todoList(): Immutable.List<TodolistItem>{
        return this.store.getState();
    }

    dispatch(action: ITodoAction){
        this.store.dispatch(action);
    }



    addTodo(newTodo: String){
        this.todolist.push({
            title: newTodo,
            finished: false
        });
    }
    removeTodo(todolistitem: TodolistItem){
        const index = this.todolist.indexOf(todolistitem);
        this.todolist.splice(index, 1);
    }
    toggleFinishTodo(todolistitem: TodolistItem){
        const index = this.todolist.indexOf(todolistitem);
        this.todolist = (<any>this.todolist).update(index, (todolistitem) => {
            return {
                title: todolistitem.title,
                finished: todolistitem.finished
            }
        })
    }


}









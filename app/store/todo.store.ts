//Todolist store

import Immutable = require('immutable');
import {createStore} from 'redux';
import { ITodoAction } from '../actions';
import { reducer } from '../reducer';

export class TodoListItem{
    id: number;
    title: String;
    finished: boolean;
}

export class TodoListStore {
    store = createStore(reducer, Immutable.List<TodoListItem>());

    get todoList(): Immutable.List<TodoListItem>{
        return this.store.getState();
    }

    dispatch(action: ITodoAction){
        this.store.dispatch(action);
    }

}









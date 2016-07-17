// Actions
export interface ITodoAction {
    type: string;
    id: number;
    title?: string;
}

import { Injectable } from '@angular/core';


@Injectable()
export class ActionsService{
     _addTodo = function(title: string, id: number): ITodoAction {
        return {
            type: 'ADD',
            id,
            title
        };
    };

    _removeTodo = function(id: number): ITodoAction {
        return {
            type: 'REMOVE',
            id
        };
    };

    _toggleFinishedTodo = function(id: number): ITodoAction {
        return {
            type: 'FINISHED',
            id
        };
    };
}
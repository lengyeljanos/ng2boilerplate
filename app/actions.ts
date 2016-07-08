// Actions

import { TodoListItem as TodolistItemModel} from '../store/todo.store';

export interface ITodoAction {
    type: string;
    id: number;
    name?: string;
}

export function addTodo(name: string, id: number): ITodoAction {
    return {
        type: 'ADD',
        id,
        name
    };
}

export function removeContact(id: number): ITodoAction {
    return {
        type: 'REMOVE',
        id
    };
}

export function starContact(id: number): ITodoAction {
    return {
        type: 'FINISHED',
        id
    };
}
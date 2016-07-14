// Actions

import { TodoListItem as TodoListItemModel} from './store/todo.store';

export interface ITodoAction {
    type: string;
    id: number;
    title?: string;
}

export function _addTodo(title: string, id: number): ITodoAction {
    return {
        type: 'ADD',
        id,
        title
    };
}

export function _removeTodo(id: number): ITodoAction {
    return {
        type: 'REMOVE',
        id
    };
}

export function _toggleFinishedTodo(id: number): ITodoAction {
    return {
        type: 'FINISHED',
        id
    };
}
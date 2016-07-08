// Reducer

import Immutable = require('immutable');
import { ITodoAction } from './actions';
import { TodolistItem as TodoListItemModel} from '../store/todo.store';


export function reducer(state: Immutable.List<TodoListItemModel> = Immutable.List<TodoListItemModel>(), action: ITodoAction){
    functions = {
        ADD: function(state){
            return state.push({
                id: action.id,
                title: action.title,
                finished: false
            })
        },
        REMOVE: function(state){
            return state.delete(findIndexById())
        },
        FINISHED: function(state){
            return (<any>state).update(findIndexById(), (todo) => {
                return {
                    id: todo.id,
                    title: todo.title,
                    finished: !todo.finished
                };
            });
        }

    };

    function findIndexById() {
        return state.findIndex((todo) => todo.id === todo.id);
    }

    return functions[action.type](state);

}


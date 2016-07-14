// Reducer

import Immutable = require('immutable');
import { ITodoAction } from './actions';
import { TodoListItem as TodoListItemModel} from './store/todo.store';


export function reducer(state: Immutable.List<TodoListItemModel> = Immutable.List<TodoListItemModel>(), action: ITodoAction){
    let functions = {
        ADD: function(state){
            return state.push({
                id: action.id,
                title: action.title,
                finished: false
            });
        },
        REMOVE: function(state){
            return state.delete(findIndexById());
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
        return result = state.findIndex((todo) => todo.id === action.id);
    }

    if (!state) {return {} }

    if (typeof functions[action.type] === "function" ){
        var result = functions[action.type](state);
        return result;
    } else {
        return state;
    }
}


import { bootstrap }    from '@angular/platform-browser-dynamic';
import { TodoList } from './components/todo-list/todo.list.component';
import { TodoListStore } from './store/todo.store';
bootstrap(TodoList, [TodoListStore]);
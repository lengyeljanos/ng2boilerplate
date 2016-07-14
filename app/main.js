"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var todo_list_component_1 = require('./components/todo-list/todo.list.component');
var todo_store_1 = require('./store/todo.store');
platform_browser_dynamic_1.bootstrap(todo_list_component_1.TodoList, [todo_store_1.TodoListStore]);
//# sourceMappingURL=main.js.map
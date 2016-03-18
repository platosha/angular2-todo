import {Component} from 'angular2/core';
import {Todo} from './todo';
import {TodoDetailComponent} from './todo-detail.component';

@Component({

  selector: 'todo-app',

  template: `

    <h1>{{title}}</h1>

    <h2>My Todos</h2>

    <table class="todos">
      <tr>
        <th>Done</th>
        <th>Due Date</th>
        <th></th>
      </tr>
      <tr *ngFor="#todo of todos"
        [class.selected]="todo === selectedTodo"
        [class.done]="todo.done"
        (click)="onSelect(todo)">
        <td><input [(ngModel)]="todo.done" type="checkbox"></td>
        <td class="due-date">{{todo.dueDate}}</td>
        <td class="title">{{todo.title}}</td>
      </tr>
    </table>

    <todo-detail [todo]="selectedTodo"></todo-detail>

  `,

  styles: [`
    .selected {
      background-color: #369;
      color: white;
    }

    .done {
      color: #888;
      text-decoration: line-through;
    }

    table.todos {
      width: 100%;
      border-collapse: collapse;
    }

    table.todos tr {
      cursor: pointer;
    }

    table.todos tr.selected {
      cursor: default;
    }

    table.todos th,
    table.todos td {
      text-align: left;
      padding: .25em .5em;
      border-bottom: 1px solid #ccc;
    }

    table.todos tr:last-child th,
    table.todos tr:last-child td {
      border-bottom: none;
    }
  `],

  directives: [TodoDetailComponent]

})

export class AppComponent {

  title = 'Todo Angular 2 App';

  todos: Todo[] = [
    { done: true,  "title": "Complete me at Jan 1", "dueDate": "2016-01-01", attachments: [] },
    { done: false, "title": "Complete me at Jan 2", "dueDate": "2016-01-02", attachments: [{name: 'facepalm.jpg', progress: 100}] },
    { done: false, "title": "Complete me at Jan 3", "dueDate": "2016-01-03", attachments: [] },
    { done: true,  "title": "Complete me at Apr 1", "dueDate": "2016-04-01", attachments: [] },
    { done: false, "title": "Complete me at Apr 2", "dueDate": "2016-04-02", attachments: [] },
    { done: false, "title": "Complete me at Apr 3", "dueDate": "2016-04-03", attachments: [] }
  ];

  selectedTodo: Todo;

  onSelect(todo: Todo) {
    this.selectedTodo = todo;
  }

}

import {Component} from 'angular2/core';
import {Todo} from './todo';

@Component({

  selector: 'todo-detail',

  template: `
    <div *ngIf="todo">
      <vaadin-date-picker
        label="Due Date"
        [value]="todo.dueDate"
        (value-changed)="todo.dueDate=$event.detail.value">
      </vaadin-date-picker>
      <div class="title"><input [(ngModel)]="todo.title" placeholder="Title"></div>
      <h3>Attachments</h3>
      <vaadin-upload
        target="http://hupa.app.fi/upload/servlet.gupld"
        [files]="todo.attachments"
        (files-changed)="todo.attachments=$event.target.files">
      </vaadin-upload>
      <ul>
        <li *ngFor="#attachment of todo.attachments">
          <strong>{{attachment.name}}</strong>
          {{attachment.status}}
        </li>
      </ul>
    </div>
  `,

  styles: [`
    .title {
      padding: 1em 0;
    }
    .title input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      font-size: 1em;
    }
  `],

  inputs: ['todo']

})

export class TodoDetailComponent {

  todo: Todo;

}

import { Component } from '@angular/core';
import { Todo } from '../todo';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../store/store';
import { REMOVE_ALL } from '../store/actions';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css'],
  providers: [ DatePipe ]
})
export class TodoDashboardComponent {
  constructor(private ngRedux: NgRedux<IAppState>, private datePipe: DatePipe) {}
  @select((s) => s.tasks.todos) todos;
  @select((s) => s.tasks.lastUpdated) lastUpdated;
  private items = 0;
  private lastChange = 'never';

  lastUpdate(): string {
    this.lastUpdated.subscribe((value) => {
      const date = new Date(value);
      this.lastChange =  value ? this.datePipe.transform(date, 'hh:mm:ss') : 'never';
    });
    return this.lastChange;
  }

  totalItems(): number {
    this.todos.subscribe((value) => {
      this.items =  value ? value.length : 0;
    });
    return this.items;
  }

  removeAll() {
    this.ngRedux.dispatch({ type: REMOVE_ALL });
  }
}

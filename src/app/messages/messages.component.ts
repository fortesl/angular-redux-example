import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';
import { IAppState } from '../store/store';
import { INCREMENT, DECREMENT } from '../store/actions';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @select((s) => s.messages.counter) messages;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT});
  }

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT});
  }
}

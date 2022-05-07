import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
    <h2>{{ date | date: 'shortTime' }}</h2>
  </div>`,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public date = new Date();
  public person = {
    name: 'Sterling',
    role: 'Fullstack Developer',
  };
  @Output() public childEvent = new EventEmitter();
  @Input() public parentData: any;
  public color = 'red';
  public colors = ['red', 'blue', 'green', 'yellow'];
  displayName = false;
  public name = 'Angular  ';
  public myId = 'test Id';
  public isDisabled = false;
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'bold',
  };
  public greeting = '';
  constructor() {}

  ngOnInit(): void {}

  onClick(event: any) {
    this.greeting = event.type;
    console.log(this.greeting);
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

  fireEvent() {
    this.childEvent.emit('Code Evolution');
  }

  logMessage(message: string) {
    console.log(message);
  }
}

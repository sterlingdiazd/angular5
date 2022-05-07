import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
    {{ greetUser() }}
    <h2 [style.color]="hasError ? 'red' : 'green'">Text</h2>
    <h2 [ngClass]="messageClasses">Codevolution</h2>
    <input
      #myInput
      type="text"
      class="text-success"
      value="Sterling"
      [disabled]="isDisabled"
    />
    <h2 [style.color]="highlightColor">Codevolution 2</h2>
    <h2 [ngStyle]="titleStyles">Codevolution 2</h2>
    <button (click)="greeting = 'Welcome Message'">Greet</button>
    {{ greeting }}
    <button (click)="logMessage(myInput.value)">Test Print</button>
    <input [(ngModel)]="name" type="text" />
    {{ name }}

    <h2 *ngIf="displayName; then thenBlock; else elseBlock">ngIf Block</h2>
    <ng-template #thenBlock> Then block </ng-template>
    <ng-template #elseBlock> -Else Blog </ng-template>

    <div [ngSwitch]="color">
      <h2 *ngSwitchCase="'red'">Red</h2>
      <h2 *ngSwitchCase="'blue'">Blue</h2>
      <h2 *ngSwitchCase="'green'">Green</h2>
      <h2 *ngSwitchDefault>You need to choose</h2>
    </div>

    <div *ngFor="let color of colors; odd as o; index as i">
      <h2>{{ i }}: {{ color }} - {{ o }}</h2>
    </div>

    <h2>Hello from {{ parentData }}</h2>
    <button (click)="fireEvent()">Fire Event</button>
  </div>`,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
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

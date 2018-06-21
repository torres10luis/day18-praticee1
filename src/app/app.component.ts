import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  bools: any[] = [true, false];
  nums: [1, 2.5, 5];
  strs: ['hi', 'there'];

  test: [{
    id: 1, name: 'test'
  }];

  user: [{
    id: 2, name: 'user'
  }];

  objs: Array<object> = [this.test, this.user];

  types: Array<any> = [this.bools, this.nums, this.strs, this.objs];

  getTypeOf(types) {
    return typeof types;
  }
}




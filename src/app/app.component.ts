import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // bools = false;

  bools: boolean[] = [true, false ];
  nums: number[] = [1, 2.5, 5];
  strs: string[] = ['hi', 'there'];

  test: object = {
    id: 1, name: 'test'
    };

  user: object = {
    id: 2, name: 'user'
  };

  objs: Array<Object> = [this.test, this.user];

  types: Array<any> = [this.bools, this.nums, this.strs, this.objs];


  getTypeOf(x: any) {
    return typeof x ;
  }

}




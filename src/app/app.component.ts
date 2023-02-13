import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = 10;
  number2 = 20;
}

class Dog {
  constructor(public name:string, public age:number){};
}

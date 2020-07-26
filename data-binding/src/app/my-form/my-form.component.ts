import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  url: string = 'http://google.com.br'
  
  condition: boolean = true;
  
  urlImage = 'http://lorempixe.com/400/200/nature/'

  getValue() {
    return 1;
  }

  getCondition() {
    return true;
  }

  name: string = 'abc';

  person: any = {
    name: 'def',
    age: 50
  }

  constructor() { }

  ngOnInit(): void {
  }

}

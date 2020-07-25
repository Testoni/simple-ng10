import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com.br'
  condition: boolean = true;
  urlImage = 'http://lorempixe.com/400/200/nature/'

  getValue() {
    return 1;
  }

  getCondition() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

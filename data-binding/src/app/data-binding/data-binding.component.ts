import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  courseName: string = 'Angular';

  initialValue = 15;
  
  onChangedValue(event) {
    console.log(event.newValue)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

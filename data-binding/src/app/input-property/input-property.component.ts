import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  // inputs: ['courseName:name'] or use @Input
})
export class InputPropertyComponent implements OnInit {

  @Input('name') courseName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

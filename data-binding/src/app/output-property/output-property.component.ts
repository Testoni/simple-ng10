import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changedValue = new EventEmitter();

  increment() {
    this.value++;
    this.changedValue.emit({newValue: this.value});
  }
  
  decrement() {
    this.value--;
    this.changedValue.emit({newValue: this.value});
  }

  constructor() { }

  ngOnInit(): void {
  }

}

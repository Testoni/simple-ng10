import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() changedValue = new EventEmitter();

  @ViewChild('fieldInput') fieldValueInput: ElementRef;

  increment() {
    this.fieldValueInput.nativeElement.value++;
    this.changedValue.emit({newValue: this.value});
  }
  
  decrement() {
    this.fieldValueInput.nativeElement.value--;
    this.changedValue.emit({newValue: this.value});
  }

  constructor() { }

  ngOnInit(): void {
  }

}

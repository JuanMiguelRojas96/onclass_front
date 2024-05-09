import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface InputProps {
  label: string;
  placeholder: string;
  formKey: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() inputProps: InputProps = {
    label: '',
    placeholder: '',
    formKey: '',
  };

  @Output() valueChanged = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(value);
  }

}

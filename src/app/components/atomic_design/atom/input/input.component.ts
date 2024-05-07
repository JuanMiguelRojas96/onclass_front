import { Component, Input, OnInit } from '@angular/core';

export interface InputProps {
  label: string;
  placeholder: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() inputProps: InputProps = {
    label: '',
    placeholder: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}

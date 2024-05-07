import { Component, Input, OnInit } from '@angular/core';
import { InputProps } from '../../atom/input/input.component';
import { ButtonProps } from '../../atom/button/button.component';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {

  @Input() inputs: InputProps[] = [
    {label: 'Label', placeholder: 'Placeholder'},
    {label: 'Label', placeholder: 'Placeholder'},
  ]

  @Input() title: string = 'title';

  @Input() buttonProps: ButtonProps = {
    text: 'text',
    value: '',
  }

  show = false;

  constructor() { }

  changeShow() {
    this.show = !this.show
  }

  ngOnInit(): void {
  }

}

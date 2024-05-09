import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputProps } from '../../atom/input/input.component';
import { ButtonProps } from '../../atom/button/button.component';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {


  show = false;
  formData: any = {}

  @Input() inputs: InputProps[] = []

  @Input() title: string = 'title';

  @Input() buttonProps: ButtonProps = {
    text: '',
    value: '',
  }

  @Output() formSubmit = new EventEmitter()

  

  constructor() { }

  onSubmit() {
    this.formSubmit.emit(this.formData)
    this.show = false;
    this.formData = {}
  }

  onInputChange(key: string, value: string) {
    this.formData[key] = value
  }

  changeShow() {
    this.show = !this.show
  }

  ngOnInit(): void {}

}

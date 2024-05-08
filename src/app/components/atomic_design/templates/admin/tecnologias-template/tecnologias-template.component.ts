import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemContent } from '../../../atom/item-content/item-content.component';
import { ButtonProps } from '../../../atom/button/button.component';
import { InputProps } from '../../../atom/input/input.component';

@Component({
  selector: 'app-tecnologias-template',
  templateUrl: './tecnologias-template.component.html',
  styleUrls: ['./tecnologias-template.component.scss']
})
export class TecnologiasTemplateComponent implements OnInit {

  @Input() items: ItemContent[] = [];

  @Input() texto: string = '';

  @Input() buttonProps: ButtonProps = {
    text: '',
    value: '',
  };
  @Input() modal_buttonProps: ButtonProps = {
    text: '',
    value: '',
  };

  @Input() inputs: InputProps[] = [];

  @Output() formSubmit = new EventEmitter();
  @Output() pageSizeChange = new EventEmitter<string>();



  constructor() { }

  onSubmit(formData: any) {
    this.formSubmit.emit(formData)
  }
  pageSizeChangeEmit(event: string) {
    this.pageSizeChange.emit(event)
  }

  ngOnInit(): void {
  }

}

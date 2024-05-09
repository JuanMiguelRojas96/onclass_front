import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemContent } from '../../../atom/item-content/item-content.component';
import { ButtonProps } from '../../../atom/button/button.component';
import { InputProps } from '../../../atom/input/input.component';
import { PaginationProps } from '../../../atom/pagination/pagination.component';

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
  @Input() paginationProps: PaginationProps = {
    sizeContent: 0,
    sizePage: 0
  }

  @Input() inputs: InputProps[] = [];

  @Output() formSubmit = new EventEmitter();
  @Output() pageSizeChange = new EventEmitter<number>();
  @Output() pageChanged = new EventEmitter<number>();



  constructor() { }

  onSubmit(formData: any) {
    this.formSubmit.emit(formData)
  }
  pageSizeChangeEmit(size: number) {
    this.pageSizeChange.emit(size)
  }
  pageChangedEmit(page: number) {
    this.pageChanged.emit(page)
  }

  ngOnInit(): void {
  }

}

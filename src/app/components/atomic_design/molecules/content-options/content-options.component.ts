import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemContent } from '../../atom/item-content/item-content.component';
import { ButtonProps } from '../../atom/button/button.component';

@Component({
  selector: 'app-content-options',
  templateUrl: './content-options.component.html',
  styleUrls: ['./content-options.component.scss']
})
export class ContentOptionsComponent implements OnInit {

  pageSizes: { text:string, value: string }[] = [
    { text:'10 por página', value: '10' },
    { text: '25 por página', value: '25' },
    { text: '50 por página', value: '50' },
  ]; 
  selectedSize = this.pageSizes[0];
  dropdownVisible = false;


  @Input() items: ItemContent[] = []

  @Input() texto: string = '';

  @Input() buttonProps: ButtonProps = {
    text: '',
    value: '',
    image: ''
  }

  @Output() buttonClick = new EventEmitter()
  @Output() pageSizeChange = new EventEmitter<string>();
  

  constructor() {}

  ngOnInit(): void {
  }

  onClick() {
    this.buttonClick.emit();
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }


  onPageSizeSelect(option: any) {
    this.selectedSize = option;
    this.pageSizeChange.emit(this.selectedSize.value);
  }


}

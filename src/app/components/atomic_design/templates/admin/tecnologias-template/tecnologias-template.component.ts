import { Component, Input, OnInit } from '@angular/core';
import { ItemContent } from '../../../atom/item-content/item-content.component';
import { ButtonProps } from '../../../atom/button/button.component';

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

  constructor() { }

  ngOnInit(): void {
  }

}

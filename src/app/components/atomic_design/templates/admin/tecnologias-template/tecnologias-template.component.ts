import { Component, Input, OnInit } from '@angular/core';
import { ItemContent } from '../../../atom/item-content/item-content.component';

@Component({
  selector: 'app-tecnologias-template',
  templateUrl: './tecnologias-template.component.html',
  styleUrls: ['./tecnologias-template.component.scss']
})
export class TecnologiasTemplateComponent implements OnInit {

  @Input() items: ItemContent[] = [];


  @Input() is_content: boolean = false;
  @Input() texto: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

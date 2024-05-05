import { Component, Input, OnInit } from '@angular/core';

export interface ItemContent {
  value : string;
  name: string;
  description: string;
  image_button: string;
}


@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss']
})
export class ItemContentComponent implements OnInit {

  @Input() item: ItemContent = {
    value: '',
    name: '',
    description: '',
    image_button: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}

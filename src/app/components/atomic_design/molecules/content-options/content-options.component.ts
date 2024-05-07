import { Component, OnInit, Input } from '@angular/core';
import { ItemContent } from '../../atom/item-content/item-content.component';
import { ButtonProps } from '../../atom/button/button.component';

@Component({
  selector: 'app-content-options',
  templateUrl: './content-options.component.html',
  styleUrls: ['./content-options.component.scss']
})
export class ContentOptionsComponent implements OnInit {

  @Input() items: ItemContent[] = []

  @Input() texto: string = '';

  @Input() buttonProps: ButtonProps = {
    text: '',
    value: '',
    image: ''
  }

  constructor() {}

  ngOnInit(): void {
  }

}

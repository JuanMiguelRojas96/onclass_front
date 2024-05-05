import { Component, OnInit, Input } from '@angular/core';
import { ItemContent } from '../../atom/item-content/item-content.component';

@Component({
  selector: 'app-content-options',
  templateUrl: './content-options.component.html',
  styleUrls: ['./content-options.component.scss']
})
export class ContentOptionsComponent implements OnInit {

  @Input() items: ItemContent[] = []

  @Input() is_content: boolean = false;
  @Input() texto: string = '';



  constructor() {}

  ngOnInit(): void {
  }

}

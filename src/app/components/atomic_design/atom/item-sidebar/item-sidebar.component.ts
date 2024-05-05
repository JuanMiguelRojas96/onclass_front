import { Component, OnInit, Input } from '@angular/core';

export interface ItemSidebar {
  text: string;
  value: string;
  routerLink: string;
  image: string;
}

@Component({
  selector: 'app-item-sidebar',
  templateUrl: './item-sidebar.component.html',
  styleUrls: ['./item-sidebar.component.scss']
})

export class ItemSidebarComponent implements OnInit {

  @Input() item: ItemSidebar = {
    text: '',
    value: '',
    routerLink: '',
    image: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

}

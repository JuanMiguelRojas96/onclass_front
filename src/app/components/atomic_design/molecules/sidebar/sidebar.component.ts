import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() items: any[] = [];

  @Input() image: string = '';
  @Input() img_height: string = 'auto';
  @Input() img_width: string = '60%';

  
  constructor() { }

  ngOnInit(): void {
  }

}

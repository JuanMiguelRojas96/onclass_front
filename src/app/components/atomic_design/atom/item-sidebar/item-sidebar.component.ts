import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-sidebar',
  templateUrl: './item-sidebar.component.html',
  styleUrls: ['./item-sidebar.component.scss']
})
export class ItemSidebarComponent implements OnInit {


  @Input() text:string = '';
  @Input() fontSize:string = '';
  @Input() padding:string = '16px 24px 16px 24px';
  @Input() value:string = '';

  @Input() image:string = '';
  @Input() img_height:string = '20px';
  @Input() img_width:string = '20px';



  constructor() { }

  ngOnInit(): void {
  }

}

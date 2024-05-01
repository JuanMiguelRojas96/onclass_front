import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() bg_color_header: string = '';
  @Input() img_profile: string = '';

  @Input() img_sidebar: string = '';
  @Input() items_sidebar: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}

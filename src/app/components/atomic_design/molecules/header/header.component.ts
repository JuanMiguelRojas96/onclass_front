import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() backgroundColor: string = '';
  
  @Input() img_profile: string = '';
  @Input() img_logo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

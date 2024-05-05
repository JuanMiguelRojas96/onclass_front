import { Component, Input, OnInit } from '@angular/core';

export interface Header {
  backgroundColor: string;
  img_profile: string;
  img_logo?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header: Header = {
    backgroundColor: '',
    img_profile: '',
    img_logo: '',
  }


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../../molecules/header/header.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 @Input() header : Header = {
   backgroundColor: '',
   img_profile: '',
   img_logo: '',
 }


  constructor() { }

  ngOnInit(): void {
  }

}

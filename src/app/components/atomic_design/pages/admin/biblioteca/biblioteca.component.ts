import { Component, OnInit } from '@angular/core';
import { Header } from '../../../molecules/header/header.component';
import { UserOption } from '../../../atom/user-option/user-option.component';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  header: Header = {
    backgroundColor:'#E7833DB2',
    img_profile:'../../../../../assets/images/icons/profile.png'
  }

  options: UserOption[] = [
    {text: 'Tecnologías', value:'tecnologias' ,routerLink:'tecnologias'},
    {text: 'Capacidades', value:'capacidades',routerLink:'capacidades'},
    {text: 'Bootcamps', value:'bootcamps' ,routerLink:'bootcamps'}
  ]

  


  constructor() {
  }

  ngOnInit(): void {

  }

}

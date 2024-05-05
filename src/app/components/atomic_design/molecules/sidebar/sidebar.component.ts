import { Component, OnInit, Input } from '@angular/core';
import { ItemSidebar } from '../../atom/item-sidebar/item-sidebar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: ItemSidebar[] = [
    {text: 'Inicio',value: 'inicio', routerLink: '/inicio', image: '../../../../../assets/images/icons/Inicio.png'},
    {text: 'Biblioteca',value: 'biblioteca', routerLink: '/biblioteca', image: '../../../../../assets/images/icons/Biblioteca.png'},
  ];

  image: string = '../../../../../assets/images/logos/logoOnClass.png';

  
  constructor() { }

  ngOnInit(): void {
  }

}

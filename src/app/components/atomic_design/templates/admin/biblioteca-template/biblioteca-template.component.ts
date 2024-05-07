import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../../../molecules/header/header.component';

@Component({
  selector: 'app-biblioteca-template',
  templateUrl: './biblioteca-template.component.html',
  styleUrls: ['./biblioteca-template.component.scss']
})
export class BibliotecaTemplateComponent implements OnInit {


  @Input() header:Header = {
    backgroundColor: '',
    img_profile: '',
    img_logo: '',
  }

  @Input() options: any[] = [];

  @Input() text: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}

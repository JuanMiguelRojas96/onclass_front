import { Component, OnInit, Input } from '@angular/core';

export interface UserOption {
  text: string;
  value: string;
  routerLink: string;
}

@Component({
  selector: 'app-user-option',
  templateUrl: './user-option.component.html',
  styleUrls: ['./user-option.component.scss']
})
export class UserOptionComponent implements OnInit {

  @Input() option: UserOption = {
    text: '',
    value: '',
    routerLink: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}

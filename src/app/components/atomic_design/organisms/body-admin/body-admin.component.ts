import { Component, Input, OnInit } from '@angular/core';
import { UserOption } from '../../atom/user-option/user-option.component';

@Component({
  selector: 'app-body-admin',
  templateUrl: './body-admin.component.html',
  styleUrls: ['./body-admin.component.scss']
})
export class BodyAdminComponent implements OnInit {
  
  @Input() button_text: string = '';
  @Input() button_value: string = '';
  @Input() button_image: string = '';

  @Input() options: UserOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

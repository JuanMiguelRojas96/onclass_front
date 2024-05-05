import { Component, OnInit, Input } from '@angular/core';
import { UserOption } from '../../atom/user-option/user-option.component';

@Component({
  selector: 'app-nav-options',
  templateUrl: './nav-options.component.html',
  styleUrls: ['./nav-options.component.scss']
})
export class NavOptionsComponent implements OnInit {

  @Input() options: UserOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

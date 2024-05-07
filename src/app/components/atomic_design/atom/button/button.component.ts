import { Component, OnInit, Input } from '@angular/core';

export interface ButtonProps {
  text: string;
  value: string;
  image?: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonProps: ButtonProps = {
    text: '',
    value: '',
    image: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}

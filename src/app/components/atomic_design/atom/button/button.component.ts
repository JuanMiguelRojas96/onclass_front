import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ButtonProps {
  text: string;
  value: string;
  image?: string;
  type?: string;
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
    image: '',
    type: 'button',
  }

  @Output() buttonClick = new EventEmitter();

  constructor() { }

  onClick(event: Event) {
    event.preventDefault();
    this.buttonClick.emit();
  }

  ngOnInit(): void {
  }

}

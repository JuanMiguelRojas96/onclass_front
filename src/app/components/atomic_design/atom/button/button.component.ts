import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = '';
  @Input() borderRadius: string = '32px';
  @Input() fontSize: string = '';
  @Input() value: string = '';
  @Input() padding: string = '16px 24px 16px 24px';

  @Input() image: string = '';
  @Input() img_height: string = '20px';
  @Input() img_width: string = '20px';


  constructor() { }

  ngOnInit(): void {
  }

}

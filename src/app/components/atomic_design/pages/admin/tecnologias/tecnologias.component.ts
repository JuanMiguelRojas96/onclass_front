import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { TecnologiasService } from 'src/app/components/shared/services/tecnologias/tecnologias.service';
import { ItemContent } from '../../../atom/item-content/item-content.component';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {

    items: ItemContent[] = [];

    @Output() is_content: boolean;

    private subscription: Subscription;





  constructor(private tecnologiasService: TecnologiasService) {
    this.is_content = false;
    this.subscription = new Subscription;
   }

  ngOnInit(): void {

    if (this.items.length > 0){
      this.is_content = true;
    }else{
      this.getTecnologias();
    }

  }

  getTecnologias(){
    this.subscription = this.tecnologiasService.getTecnologias().subscribe((data: any) => {
      this.items = data.map((item: any) => {
        return {
          ...item,
          value: item.name,
          image_button: '../../../../../../assets/images/icons/grab_button.svg'
        }
      });
      this.is_content = data != null;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

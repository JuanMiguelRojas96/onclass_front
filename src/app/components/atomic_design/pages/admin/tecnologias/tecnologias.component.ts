import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { TecnologiasService } from 'src/app/components/shared/services/tecnologias/tecnologias.service';
import { ItemContent } from '../../../atom/item-content/item-content.component';
import { InputModalComponent } from '../../../molecules/input-modal/input-modal.component';
import { ButtonProps } from '../../../atom/button/button.component';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {

    items: ItemContent[] = [];

    texto: string = 'Tecnologías';

    buttonProps: ButtonProps = {
      text: 'Crear',
      value: 'Crear',
    }

    private subscription: Subscription;


  constructor(private tecnologiasService: TecnologiasService) {
    this.subscription = new Subscription;
   }

  ngOnInit(): void {
    this.getTecnologias();
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
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

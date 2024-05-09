import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { TecnologiasService } from 'src/app/components/shared/services/tecnologias/tecnologias.service';
import { ItemContent } from '../../../atom/item-content/item-content.component';
import { ButtonProps } from '../../../atom/button/button.component';
import { InputProps } from '../../../atom/input/input.component';
import { Tecnologia } from 'src/app/components/shared/class/Tecnologia';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {

    items: ItemContent[] = [];
    pageSize: string = '10';

    texto: string = 'Tecnologías';

    buttonProps: ButtonProps = {
      text: 'Crear',
      value: 'Crear',
      image: '../../../../../../assets/images/icons/Plus.svg',
      type: 'submit'
    }

    modal_buttonProps: ButtonProps = {
      text: 'Crear',
      value: 'Crear',
      type: 'submit'
    }

    inputs: InputProps[] = [
      {label:'Nombre', placeholder:'Ingresa el nombre de la tecnologia', formKey:'name'},
      {label:'Descripción', placeholder:'Ingresa la descripción de la tecnologia', formKey:'description'}
    ];

    private subscription: Subscription;


  constructor(private tecnologiasService: TecnologiasService) {
    this.subscription = new Subscription;
   }

  ngOnInit(): void {
    this.getTecnologias();
  }

  pageSizeChange(size: string){
    this.pageSize = size;
    this.getTecnologias();
  }



  postTecnologias(formData: Tecnologia){

    this.tecnologiasService.postTecnologias(formData).subscribe((data: any) => {
      console.log(data);
      this.getTecnologias();
    }, (error) => {
      console.log(error);
    });
  }

  getTecnologias(){
    this.subscription = this.tecnologiasService.getTecnologias(this.pageSize).subscribe((data: any) => {
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

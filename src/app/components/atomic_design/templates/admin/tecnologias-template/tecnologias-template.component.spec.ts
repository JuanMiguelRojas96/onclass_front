import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasTemplateComponent } from './tecnologias-template.component';

describe('TecnologiasTemplateComponent', () => {
  let component: TecnologiasTemplateComponent;
  let fixture: ComponentFixture<TecnologiasTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiasTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

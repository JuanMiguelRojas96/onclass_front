import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTemplateComponent } from './inicio-template.component';

describe('InicioTemplateComponent', () => {
  let component: InicioTemplateComponent;
  let fixture: ComponentFixture<InicioTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

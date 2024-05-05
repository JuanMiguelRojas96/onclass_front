import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaTemplateComponent } from './biblioteca-template.component';

describe('BibliotecaTemplateComponent', () => {
  let component: BibliotecaTemplateComponent;
  let fixture: ComponentFixture<BibliotecaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

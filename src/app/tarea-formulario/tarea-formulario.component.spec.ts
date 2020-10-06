import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaFormularioComponent } from './tarea-formulario.component';

describe('TareaFormularioComponent', () => {
  let component: TareaFormularioComponent;
  let fixture: ComponentFixture<TareaFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPasajeroComponent } from './vista-pasajero.component';

describe('VistaPasajeroComponent', () => {
  let component: VistaPasajeroComponent;
  let fixture: ComponentFixture<VistaPasajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPasajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

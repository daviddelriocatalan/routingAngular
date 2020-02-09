import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegadoraComponent } from './barra-navegadora.component';

describe('BarraNavegadoraComponent', () => {
  let component: BarraNavegadoraComponent;
  let fixture: ComponentFixture<BarraNavegadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavegadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

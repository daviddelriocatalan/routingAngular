import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto1Component } from './proyecto1.component';

describe('Proyecto1Component', () => {
  let component: Proyecto1Component;
  let fixture: ComponentFixture<Proyecto1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proyecto1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proyecto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

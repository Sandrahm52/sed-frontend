import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientePageComponent } from './expediente-page.component';

describe('ExpedientePageComponent', () => {
  let component: ExpedientePageComponent;
  let fixture: ComponentFixture<ExpedientePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedientePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

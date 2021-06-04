import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegesPageComponent } from './privileges-page.component';

describe('PrivilegesPageComponent', () => {
  let component: PrivilegesPageComponent;
  let fixture: ComponentFixture<PrivilegesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

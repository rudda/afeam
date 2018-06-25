import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtendentePageComponent } from './add-atendente-page.component';

describe('AddAtendentePageComponent', () => {
  let component: AddAtendentePageComponent;
  let fixture: ComponentFixture<AddAtendentePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAtendentePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAtendentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

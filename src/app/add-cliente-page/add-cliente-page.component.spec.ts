import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientePageComponent } from './add-cliente-page.component';

describe('AddClientePageComponent', () => {
  let component: AddClientePageComponent;
  let fixture: ComponentFixture<AddClientePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

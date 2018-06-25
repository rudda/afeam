import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendentePageComponent } from './atendente-page.component';

describe('AtendentePageComponent', () => {
  let component: AtendentePageComponent;
  let fixture: ComponentFixture<AtendentePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendentePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

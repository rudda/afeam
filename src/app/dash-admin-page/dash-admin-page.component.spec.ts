import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminPageComponent } from './dash-admin-page.component';

describe('DashAdminPageComponent', () => {
  let component: DashAdminPageComponent;
  let fixture: ComponentFixture<DashAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

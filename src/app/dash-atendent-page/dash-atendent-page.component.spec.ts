import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAtendentPageComponent } from './dash-atendent-page.component';

describe('DashAtendentPageComponent', () => {
  let component: DashAtendentPageComponent;
  let fixture: ComponentFixture<DashAtendentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashAtendentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAtendentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

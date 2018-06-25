import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosPageComponent } from './relatorios-page.component';

describe('RelatoriosPageComponent', () => {
  let component: RelatoriosPageComponent;
  let fixture: ComponentFixture<RelatoriosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

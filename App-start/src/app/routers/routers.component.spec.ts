import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterComponent } from './routers.component';

describe('RouterComponent', () => {
  let component: RouterComponent;
  let fixture: ComponentFixture<RouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

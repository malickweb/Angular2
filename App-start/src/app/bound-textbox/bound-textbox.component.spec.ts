import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundTextboxComponent } from './bound-textbox.component';

describe('BoundTextboxComponent', () => {
  let component: BoundTextboxComponent;
  let fixture: ComponentFixture<BoundTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

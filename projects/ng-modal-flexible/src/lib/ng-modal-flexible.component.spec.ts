import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModalFlexibleComponent } from './ng-modal-flexible.component';

describe('NgModalFlexibleComponent', () => {
  let component: NgModalFlexibleComponent;
  let fixture: ComponentFixture<NgModalFlexibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModalFlexibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModalFlexibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

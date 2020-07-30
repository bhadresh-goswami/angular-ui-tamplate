import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionWellComponent } from './action-well.component';

describe('ActionWellComponent', () => {
  let component: ActionWellComponent;
  let fixture: ComponentFixture<ActionWellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

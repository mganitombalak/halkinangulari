import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGridCellComponent } from './action-grid-cell.component';

describe('ActionGridCellComponent', () => {
  let component: ActionGridCellComponent;
  let fixture: ComponentFixture<ActionGridCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionGridCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionGridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

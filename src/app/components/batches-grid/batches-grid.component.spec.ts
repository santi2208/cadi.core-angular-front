import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesGridComponent } from './batches-grid.component';

describe('BatchesGridComponent', () => {
  let component: BatchesGridComponent;
  let fixture: ComponentFixture<BatchesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchesGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

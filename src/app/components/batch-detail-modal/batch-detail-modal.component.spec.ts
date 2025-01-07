import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchDetailModalComponent } from './batch-detail-modal.component';

describe('BatchDetailModalComponent', () => {
  let component: BatchDetailModalComponent;
  let fixture: ComponentFixture<BatchDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchDetailModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBatchButtonComponent } from './approve-batch-button.component';

describe('ApproveBatchButtonComponent', () => {
  let component: ApproveBatchButtonComponent;
  let fixture: ComponentFixture<ApproveBatchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveBatchButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveBatchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

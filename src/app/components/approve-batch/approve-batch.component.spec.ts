import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBatchComponent } from './approve-batch.component';

describe('ApproveBatchComponent', () => {
  let component: ApproveBatchComponent;
  let fixture: ComponentFixture<ApproveBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMovementComponent } from './import-movement.component';

describe('ImportComponent', () => {
  let component: ImportMovementComponent;
  let fixture: ComponentFixture<ImportMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

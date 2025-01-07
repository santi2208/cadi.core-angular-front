import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsGridComponent } from './periods-grid.component';

describe('PeriodsGridComponent', () => {
  let component: PeriodsGridComponent;
  let fixture: ComponentFixture<PeriodsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

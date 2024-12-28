import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementsGridComponent } from './movements-grid.component';

describe('MovementsGridComponent', () => {
  let component: MovementsGridComponent;
  let fixture: ComponentFixture<MovementsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

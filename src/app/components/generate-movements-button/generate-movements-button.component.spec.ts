import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMovementsButtonComponent } from './generate-movements-button.component';

describe('GenerateMovementsButtonComponent', () => {
  let component: GenerateMovementsButtonComponent;
  let fixture: ComponentFixture<GenerateMovementsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateMovementsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateMovementsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

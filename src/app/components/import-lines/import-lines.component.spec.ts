import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLinesComponent } from './import-lines.component';

describe('ImportLinesComponent', () => {
  let component: ImportLinesComponent;
  let fixture: ComponentFixture<ImportLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

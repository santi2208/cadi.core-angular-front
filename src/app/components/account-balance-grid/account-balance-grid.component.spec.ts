import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBalanceGridComponent } from './account-balance-grid.component';

describe('AccountBalanceGridComponent', () => {
  let component: AccountBalanceGridComponent;
  let fixture: ComponentFixture<AccountBalanceGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBalanceGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountBalanceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

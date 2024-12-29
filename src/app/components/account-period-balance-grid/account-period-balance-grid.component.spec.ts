import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPeriodBalanceGridComponent } from './account-period-balance-grid.component';

describe('AccountPeriodBalanceGridComponent', () => {
  let component: AccountPeriodBalanceGridComponent;
  let fixture: ComponentFixture<AccountPeriodBalanceGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPeriodBalanceGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountPeriodBalanceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

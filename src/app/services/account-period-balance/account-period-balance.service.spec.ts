import { TestBed } from '@angular/core/testing';

import { AccountPeriodBalanceService } from './account-period-balance.service';

describe('AccountPeriodBalanceService', () => {
  let service: AccountPeriodBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountPeriodBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

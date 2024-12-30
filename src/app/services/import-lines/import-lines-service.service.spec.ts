import { TestBed } from '@angular/core/testing';

import { ImportLinesServiceService } from './import-lines-service.service';

describe('ImportLinesServiceService', () => {
  let service: ImportLinesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportLinesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AccountFirestore } from './account.firestore';

describe('AccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountFirestore = TestBed.get(AccountFirestore);
    expect(service).toBeTruthy();
  });
});

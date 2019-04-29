import { TestBed } from '@angular/core/testing';

import { ContactsFirestoreService } from './contacts-firestore.service';

describe('ContactsFirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsFirestoreService = TestBed.get(ContactsFirestoreService);
    expect(service).toBeTruthy();
  });
});

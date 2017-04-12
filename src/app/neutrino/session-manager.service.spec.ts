/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SessionManagerService } from './session-manager.service';

describe('SessionManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionManagerService]
    });
  });

  it('should ...', inject([SessionManagerService], (service: SessionManagerService) => {
    expect(service).toBeTruthy();
  }));
});

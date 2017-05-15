/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResolveGuardService } from './resolve-guard.service';

describe('ResolveGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveGuardService]
    });
  });

  it('should ...', inject([ResolveGuardService], (service: ResolveGuardService) => {
    expect(service).toBeTruthy();
  }));
});

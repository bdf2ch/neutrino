/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppResolveGuardService } from './app-resolve-guard.service';

describe('AppResolveGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppResolveGuardService]
    });
  });

  it('should ...', inject([AppResolveGuardService], (service: AppResolveGuardService) => {
    expect(service).toBeTruthy();
  }));
});

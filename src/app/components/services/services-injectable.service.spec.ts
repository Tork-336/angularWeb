import { TestBed } from '@angular/core/testing';

import { ServicesInjectableService } from './services-injectable.service';

describe('ServicesInjectableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesInjectableService = TestBed.get(ServicesInjectableService);
    expect(service).toBeTruthy();
  });
});

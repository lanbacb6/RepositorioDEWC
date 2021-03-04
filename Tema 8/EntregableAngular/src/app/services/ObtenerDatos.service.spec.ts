import { TestBed } from '@angular/core/testing';

import { FamiliaService } from './ObtenerDatos.service';

describe('FamiliaService', () => {
  let service: FamiliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamiliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

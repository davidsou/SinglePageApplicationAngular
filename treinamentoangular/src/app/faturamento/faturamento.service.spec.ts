import { TestBed } from '@angular/core/testing';

import { FaturamentoService } from './faturamento.service';

describe('FaturamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaturamentoService = TestBed.get(FaturamentoService);
    expect(service).toBeTruthy();
  });
});

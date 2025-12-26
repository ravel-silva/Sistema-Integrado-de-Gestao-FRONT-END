import { TestBed } from '@angular/core/testing';

import { ListarEquipes } from '../equipes/listar-equipes';

describe('ListarEquipes', () => {
  let service: ListarEquipes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarEquipes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

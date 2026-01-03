import { TestBed } from '@angular/core/testing';

import { EquipesService } from './Equipes.service.js';

describe('ListarEquipes', () => {
  let service: EquipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

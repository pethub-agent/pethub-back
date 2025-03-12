import { PetsRepository } from './pets.repository';

describe('PetsRepository', () => {
  it('should be defined', () => {
    expect(new PetsRepository()).toBeDefined();
  });
});

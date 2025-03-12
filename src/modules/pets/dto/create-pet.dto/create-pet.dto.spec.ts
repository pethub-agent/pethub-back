import { CreatePetDto } from './create-pet.dto';

describe('CreatePetDto', () => {
  it('should be defined', () => {
    expect(new CreatePetDto()).toBeDefined();
  });
});

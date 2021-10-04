import { getDegreesByRadians } from '../index';

describe('Checks correct results', () => {
  it('Should have a getDegreesByRadians function', () => {
    expect(typeof getDegreesByRadians).toBe('function');
  });

  it('Should return correct degrees value', () => {
    expect(getDegreesByRadians(6.283185307179586)).toBe(360);
  });
});

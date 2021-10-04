import { getRadiansByDegrees } from '../index';

describe('Checks correct results', () => {
  it('Should have a getRadiansByDegrees function', () => {
    expect(typeof getRadiansByDegrees).toBe('function');
  });

  it('Should return correct radians value', () => {
    expect(getRadiansByDegrees(360)).toBe(6.283185307179586);
  });
});

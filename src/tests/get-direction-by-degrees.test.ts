import { getDirectionByDegrees } from '../index';

describe('Checks correct results', () => {
  it('Should be defined', () => {
    expect(getDirectionByDegrees).toBeDefined();
  });

  it('Should have a getDirectionByDegrees function', () => {
    expect(typeof getDirectionByDegrees).toBe('function');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(360)).toBe('N');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(22.5)).toBe('NNE');
  });
});

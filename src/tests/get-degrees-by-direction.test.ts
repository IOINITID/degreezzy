import { getDegreesByDirection } from '../index';

describe('Checks correct results', () => {
  it('Should have a getDegreesByDirection function', () => {
    expect(typeof getDegreesByDirection).toBe('function');
  });

  it('Should return correct degrees value', () => {
    expect(getDegreesByDirection('N')).toBe(360);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('NNE', true)).toBe(23);
  });
});

import { getDegreesByDirection } from '../index';

describe('Checks correct results', () => {
  it('Should be defined', () => {
    expect(getDegreesByDirection).toBeDefined();
  });

  it('Should have a getDegreesByDirection function', () => {
    expect(typeof getDegreesByDirection).toBe('function');
  });

  it('Should return correct degrees value', () => {
    expect(getDegreesByDirection('N')).toBe(360);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('NNE', true)).toBe(23);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('NE', true)).toBe(45);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('ENE', true)).toBe(68);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('E', true)).toBe(90);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('ESE', true)).toBe(113);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('SE', true)).toBe(135);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('SSE', true)).toBe(158);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('S', true)).toBe(180);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('SSW', true)).toBe(203);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('SW', true)).toBe(225);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('WSW', true)).toBe(248);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('W', true)).toBe(270);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('WNW', true)).toBe(293);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('NW', true)).toBe(315);
  });

  it('Should return correct degrees value with rounding', () => {
    expect(getDegreesByDirection('NNW', true)).toBe(338);
  });
});

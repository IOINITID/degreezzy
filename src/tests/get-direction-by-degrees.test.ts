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

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(45)).toBe('NE');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(67.5)).toBe('ENE');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(90)).toBe('E');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(112.5)).toBe('ESE');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(135)).toBe('SE');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(157.5)).toBe('SSE');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(180)).toBe('S');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(202.5)).toBe('SSW');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(225)).toBe('SW');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(247.5)).toBe('WSW');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(270)).toBe('W');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(292.5)).toBe('WNW');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(315)).toBe('NW');
  });

  it('Should return correct direction value', () => {
    expect(getDirectionByDegrees(337.5)).toBe('NNW');
  });
});
